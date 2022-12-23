// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvX6KcAkqdvmpLP5m0MnRxQe6Ucao_wW0",
  authDomain: "ecommerce-jardin-d4c0b.firebaseapp.com",
  projectId: "ecommerce-jardin-d4c0b",
  storageBucket: "ecommerce-jardin-d4c0b.appspot.com",
  messagingSenderId: "258792491380",
  appId: "1:258792491380:web:36123e8446723e3bd30421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirestore = () => app