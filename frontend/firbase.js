// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,} from 'firebase/auth';



//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-IdP8fkxXPoiQzeawQ-kwvPkxgDaL8i4",
  authDomain: "uttar-7dbd1.firebaseapp.com",
  projectId: "uttar-7dbd1",
  storageBucket: "uttar-7dbd1.appspot.com",
  messagingSenderId: "199115809021",
  appId: "1:199115809021:web:84a52ee4d6eb950335de94",
  measurementId: "G-3SBGSD9Z7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const provider=new GoogleAuthProvider()

export{auth,provider}
