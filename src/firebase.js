// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPDzwfLBTBA3AKASSux8lIgOkt0WyBiXI",
  authDomain: "clone-52997.firebaseapp.com",
  projectId: "clone-52997",
  storageBucket: "clone-52997.appspot.com",
  messagingSenderId: "3309990414",
  appId: "1:3309990414:web:55bb13e6153fb5e7ec825f",
  measurementId: "G-8REZHQKG33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//initializing database and auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };