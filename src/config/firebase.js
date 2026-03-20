import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQpL33qC5w0CCEtuLft_NGI5m7qj52JfI",
  authDomain: "anime-2f325.firebaseapp.com",
  projectId: "anime-2f325",
  storageBucket: "anime-2f325.firebasestorage.app",
  messagingSenderId: "1022944533242",
  appId: "1:1022944533242:web:9901bf4fd8939bb9f58743",
  measurementId: "G-L1J30ZXLGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Persist config to local storage as requested
Object.keys(firebaseConfig).forEach(key => {
  localStorage.setItem(key, firebaseConfig[key]);
});

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
