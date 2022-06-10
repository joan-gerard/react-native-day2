// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "customers-list-68346.firebaseapp.com",
  projectId: "customers-list-68346",
  storageBucket: "customers-list-68346.appspot.com",
  messagingSenderId: "625561598266",
  appId: "1:625561598266:web:9fb657dbda383939bcf803",
  measurementId: "G-RHHZ2WJLFY",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
