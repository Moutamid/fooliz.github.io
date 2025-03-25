import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyBE9fy2xv_g17fwkZCouuTP5aMxcXI9qfg",
  authDomain: "chatty-40368.firebaseapp.com",
  databaseURL: "https://chatty-40368.firebaseio.com",
  projectId: "chatty-40368",
  storageBucket: "chatty-40368.firebasestorage.app",
  messagingSenderId: "633238822095",
  appId: "1:633238822095:web:34b2c57d9bcbbe5f25ebba"
};

// apiKey: "AIzaSyAEQy8Qo8mz38wFU6ttQ_g0ih0RaiucnGo",
  // authDomain: "fooliz-9b2de.firebaseapp.com",
  // databaseURL: "https://chatty-40368.firebaseio.com/", // Realtime Database URL
  // projectId: "fooliz-9b2de",
  // storageBucket: "fooliz-9b2de.appspot.com",
  // messagingSenderId: "589853889129",
  // appId: "1:589853889129:web:33d89888c6cd12713bc8f8",
  // measurementId: "G-051BHDGER2"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Initialize Realtime Database

export { database };
