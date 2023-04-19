// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxl8fe96jWf-tJd27__KadV5CiJ_Xtkfw",
  authDomain: "diplom-c8584.firebaseapp.com",
  projectId: "diplom-c8584",
  storageBucket: "diplom-c8584.appspot.com",
  messagingSenderId: "31800937564",
  appId: "1:31800937564:web:96e56f1a3f5df0b611ea99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a reference to the database service
const db = getFirestore(app);


export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");