import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBMNcK7xi_KXZRekuLASf4xSWjZx0r2mGI",
  authDomain: "web-rtc-demo-d50a6.firebaseapp.com",
  projectId: "web-rtc-demo-d50a6",
  storageBucket: "web-rtc-demo-d50a6.appspot.com",
  messagingSenderId: "437164856196",
  appId: "1:437164856196:web:2d42d4014eb528351143d1",
};

export const fb = firebase.initializeApp(firebaseConfig);
