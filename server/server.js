// server.js
const express = require('express');
const cors = require('cors');
const { db } = require('./firebase'); // Import the initialized database from firebase.js

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Products Collection Reference
const productsRef = db.ref('products'); // 'products' will be the root of your products data

// Helper function to generate a unique ID (for new products)
const generateProductId = () => {
    return productsRef.push().key; // Firebase's push() method generates a unique key
};

// --- API Endpoints for Products (CRUD Operations) ---

// 1. Create Product (Original endpoint - NOW handles all product attributes)
app.post('/api/products', async (req, res) => {
    try {
        // Destructure ALL possible fields, including brand, condition, rating, features, and image_url
        const {
            name,
            price,
            image, // Existing 'image' field
            image_url, // New 'image_url' field from user's request
            description,
            category,
            stock,
            brand,      // Now handled by this endpoint
            condition,  // Now handled by this endpoint
            rating,     // Now handled by this endpoint
            features    // Now handled by this endpoint (array)
        } = req.body;

        // Check for essential required fields.
        // stock is now optional, will default to 0 if not provided.
        if (!name || !price || !category) {
            return res.status(400).json({ message: 'Missing required product fields (name, price, category).' });
        }

        const id = generateProductId();
        const newProduct = {
            id,
            name,
            price,
            // Prioritize image_url, then image, then empty string
            image: image_url || image || '',
            description: description || '',
            category,
            stock: stock || 0, // Default stock to 0 if not provided
            brand: brand || '', // Default brand to empty string if not provided
            condition: condition || '', // Default condition to empty string if not provided
            rating: rating || '', // Default rating to empty string if not provided
            features: features || [] // Default features to empty array if not provided
        };

        await productsRef.child(id).set(newProduct);
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Failed to create product', error: error.message });
    }
});

// NEW API Endpoint: Create New Products (remains separate, also handles extended attributes)
// This endpoint now behaves very similarly to /api/products, but the user requested it remain.
app.post('/api/new-products', async (req, res) => {
    try {
        // Destructure all possible fields, including the new ones and image_url
        const {
            name,
            price,
            image_url, // This will be mapped to 'image'
            description,
            category,
            stock,
            brand,      // New attribute
            condition,  // New attribute
            rating,     // New attribute
            features    // New attribute (array)
        } = req.body;

        // Check for essential required fields for 'new-products'
        if (!name || !price || !category) {
            return res.status(400).json({ message: 'Missing required product fields (name, price, category).' });
        }

        const id = generateProductId();
        const newProduct = {
            id,
            name,
            price,
            image: image_url || '', // Use image_url for the 'image' field
            description: description || '',
            category,
            stock: stock || 0, // Default stock to 0 if not provided
            brand: brand || '', // Default brand to empty string if not provided
            condition: condition || '', // Default condition to empty string if not provided
            rating: rating || '', // Default rating to empty string if not provided
            features: features || [] // Default features to empty array if not provided
        };

        await productsRef.child(id).set(newProduct);
        res.status(201).json({ message: 'New product created successfully', product: newProduct });
    } catch (error) {
        console.error('Error creating new product:', error);
        res.status(500).json({ message: 'Failed to create new product', error: error.message });
    }
});


// 2. Read All Products
app.get('/api/products', async (req, res) => {
    try {
        const snapshot = await productsRef.once('value');
        const products = [];
        snapshot.forEach((childSnapshot) => {
            products.push(childSnapshot.val());
        });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
});

// 3. Read Single Product by ID
app.get('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const snapshot = await productsRef.child(productId).once('value');

        if (!snapshot.exists()) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        res.status(200).json(snapshot.val());
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ message: 'Failed to fetch product', error: error.message });
    }
});

// 4. Update Product
app.put('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updates = req.body;

        const snapshot = await productsRef.child(productId).once('value');
        if (!snapshot.exists()) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        // Map image_url to image if present in updates
        if (updates.image_url !== undefined) {
            updates.image = updates.image_url;
            delete updates.image_url; // Remove image_url from updates to avoid storing it directly
        }

        // Only update provided fields
        await productsRef.child(productId).update(updates);
        const updatedProduct = { ...snapshot.val(), ...updates }; // Merge existing data with updates

        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Failed to update product', error: error.message });
    }
});

// 5. Delete Product
app.delete('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const snapshot = await productsRef.child(productId).once('value');

        if (!snapshot.exists()) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        await productsRef.child(productId).remove();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Failed to delete product', error: error.message });
    }
});

// --- Search Endpoint ---
app.get('/api/products/search', async (req, res) => {
    try {
        const { query, category } = req.query; // 'query' for name, 'category' for category search

        const snapshot = await productsRef.once('value');
        const allProducts = [];
        snapshot.forEach((childSnapshot) => {
            allProducts.push(childSnapshot.val());
        });

        let filteredProducts = allProducts;

        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(lowerCaseQuery)
            );
        }

        if (category) {
            const lowerCaseCategory = category.toLowerCase();
            filteredProducts = filteredProducts.filter(product =>
                product.category.toLowerCase().includes(lowerCaseCategory)
            );
        }

        res.status(200).json(filteredProducts);
    } catch (error) {
        console.error('Error searching products:', error);
        res.status(500).json({ message: 'Failed to search products', error: error.message });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
