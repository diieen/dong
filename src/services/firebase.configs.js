import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC1f1U-zrdpAdjoYD0jBkq0VoOXRFeldw8",
  authDomain: "dong-40b8d.firebaseapp.com",
  projectId: "dong-40b8d",
  storageBucket: "dong-40b8d.appspot.com",
  messagingSenderId: "666265389112",
  appId: "1:666265389112:web:267763ac080a5e3f71becd",
});

const db = getFirestore(firebaseApp);

export default db;