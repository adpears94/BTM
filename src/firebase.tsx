// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUdK3YKrC6jhyOrqtS8N03LYNhLsM4Gx4",
  authDomain: "jellyfish-937d8.firebaseapp.com",
  projectId: "jellyfish-937d8",
  storageBucket: "jellyfish-937d8.firebasestorage.app",
  messagingSenderId: "620142292980",
  appId: "1:620142292980:web:1f2a57b15818f6641b53a1",
  measurementId: "G-LB592N7F6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export { app, analytics };
