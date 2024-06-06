// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkri887xYKnGSqWns8D9WhXpSFVT4za6c",
  authDomain: "vue-retail-d4596.firebaseapp.com",
  projectId: "vue-retail-d4596",
  storageBucket: "vue-retail-d4596.appspot.com",
  messagingSenderId: "1021402413119",
  appId: "1:1021402413119:web:c3e6c7da859871d913a08a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }