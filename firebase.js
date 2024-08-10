// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAal70rddRSj0Rm7yoWGlVTad9MkspwtK8",
  authDomain: "inventory-51a5d.firebaseapp.com",
  projectId: "inventory-51a5d",
  storageBucket: "inventory-51a5d.appspot.com",
  messagingSenderId: "533730418376",
  appId: "1:533730418376:web:a52d1a0e47161989444ffd",
  measurementId: "G-X7H3384PND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};
