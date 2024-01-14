import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCthQwFTeghkxiFEXwG4r4BzHzOTsYWlT0",
  authDomain: "strong-surge-352218.firebaseapp.com",
  projectId: "strong-surge-352218",
  storageBucket: "strong-surge-352218.appspot.com",
  messagingSenderId: "1075759768270",
  appId: "1:1075759768270:web:5ce43d3efd3c7527a7269f",
  measurementId: "G-8SE43J1746"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);