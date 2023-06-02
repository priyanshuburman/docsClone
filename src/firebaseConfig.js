import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx8QVwyhlNIKH82MG3IXW9_aKsEyPI_vc",
  authDomain: "docsclone-f7046.firebaseapp.com",
  projectId: "docsclone-f7046",
  storageBucket: "docsclone-f7046.appspot.com",
  messagingSenderId: "212498342811",
  appId: "1:212498342811:web:49417c1d2516543eccf73e",
  measurementId: "G-DEMQCE8T8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
