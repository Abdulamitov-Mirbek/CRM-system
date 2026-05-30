import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdGdGf5KKjK6B_gycLR2zKJgTvASH1oLo",
  authDomain: "bnf-crm.firebaseapp.com",
  projectId: "bnf-crm",
  storageBucket: "bnf-crm.firebasestorage.app",
  messagingSenderId: "213999466165",
  appId: "1:213999466165:web:59fe500ae50ff990a6b0fc",
  measurementId: "G-VYG857R2S9"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
