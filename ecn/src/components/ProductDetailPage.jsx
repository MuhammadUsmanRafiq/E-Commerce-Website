import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetailContent from './ProductDetailContent';
import BlockDetail from './BlockDetail';
import AsideItems from './AsideItems';
import BlockRecom from './BlockRecom';
import BannerProduct from './bannerproduct';

import { getProductById } from '../api/productAPI';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const data = await getProductById(id); // ✅ fetch only by ID
        setProduct(data);
      } catch (err) {
        setError('Failed to load product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  return (
    <div>
      <Header />
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">Home</a> &gt; 
          <a href="/products" className="hover:underline">Products</a> &gt; 
          <span className="font-semibold">{product?.name || `Product ${id}`}</span>
        </nav>

        {loading && <p className="text-center">Loading product...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {product && (
          <>
            <ProductDetailContent product={product} />
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="w-full lg:w-3/4">
                <BlockDetail product={product} />
              </div>
              <div className="w-full lg:w-1/4">
                <AsideItems category={product.category} />
              </div>
            </div>
          </>
        )}
      </main>

      <div className="container mx-auto px-4 py-2">
        <BlockRecom category={product?.category} />
      </div>

      <BannerProduct />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
