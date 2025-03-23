import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDk4tPPrDmf89nhY207d4Sb1uTjf6fFOqI",
  authDomain: "fooliz-9b2de.firebaseapp.com",
  databaseURL: "https://fooliz-9b2de-default-rtdb.firebaseio.com", // Realtime Database URL
  projectId: "fooliz-9b2de",
  storageBucket: "fooliz-9b2de.appspot.com",
  messagingSenderId: "589853889129",
  appId: "1:589853889129:web:33d89888c6cd12713bc8f8",
  measurementId: "G-051BHDGER2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Initialize Realtime Database

export { database };
