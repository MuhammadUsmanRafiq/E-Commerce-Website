// server/firebase.js

require('dotenv').config(); // Load .env variables

const admin = require('firebase-admin');

// Load your service account key JSON file using .env path
const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommereneweb-default-rtdb.firebaseio.com"
});

// Get a reference to the Realtime Database
const db = admin.database();

// Export the database and admin object
module.exports = { db, admin };
