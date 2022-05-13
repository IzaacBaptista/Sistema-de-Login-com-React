// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOei0SYcgoQfwRQ0PGFslqYyg3Gv5Cee4",
  authDomain: "appregistro-24038.firebaseapp.com",
  projectId: "appregistro-24038",
  storageBucket: "appregistro-24038.appspot.com",
  messagingSenderId: "701403558636",
  appId: "1:701403558636:web:b94ea2547721bf1dfcebc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);

export default db