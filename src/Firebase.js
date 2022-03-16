import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6tlVxe0iGZ3Ok7eyVyGIgx8vmW5bH8u0",
  authDomain: "linkedin-clone-a6739.firebaseapp.com",
  projectId: "linkedin-clone-a6739",
  storageBucket: "linkedin-clone-a6739.appspot.com",
  messagingSenderId: "602889682727",
  appId: "1:602889682727:web:a8feab38d46731d0493302",
  measurementId: "G-LSEJ6T59QV",
};

// connect our app to firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// get db
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
