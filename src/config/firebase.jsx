// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFjcw-IXDGkMNuuJfUsW4BpO9MCogBVdg",
  authDomain: "sampleblog-dbcd1.firebaseapp.com",
  projectId: "sampleblog-dbcd1",
  storageBucket: "sampleblog-dbcd1.appspot.com",
  messagingSenderId: "319073090138",
  appId: "1:319073090138:web:b4921a9224749fafba7663",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const dataBase = getFirestore(app);
