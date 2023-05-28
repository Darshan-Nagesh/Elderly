import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT87evROBU4EWZtI3dJlBFPEsir6U-f7Q",
  authDomain: "elderly-4b660.firebaseapp.com",
  projectId: "elderly-4b660",
  storageBucket: "elderly-4b660.appspot.com",
  messagingSenderId: "26236369423",
  appId: "1:26236369423:web:0e751d014adaa75042417a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const db=getFirestore();
export  {auth,db};