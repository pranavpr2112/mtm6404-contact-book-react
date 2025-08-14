import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEkBXxoL8SGhydz-ZIe1Murs4WtRkDJQ",
  authDomain: "contact-e0688.firebaseapp.com",
  projectId: "contact-e0688",
  storageBucket: "contact-e0688.appspot.com",
  messagingSenderId: "96535413652",
  appId: "1:96535413652:web:5727daf115437200dc581",
  measurementId: "G-4KQGT1B0J7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
