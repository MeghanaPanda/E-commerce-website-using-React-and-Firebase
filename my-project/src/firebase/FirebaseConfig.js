// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcTX5v052nFh2sx3z3IJaeWTrgJ2saLbw",
  authDomain: "myecom-a622e.firebaseapp.com",
  projectId: "myecom-a622e",
  storageBucket: "myecom-a622e.appspot.com",
  messagingSenderId: "504748077555",
  appId: "1:504748077555:web:39ffaad0d160a79f34e286"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }