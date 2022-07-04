// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyO0KYxKi29lAezuau8NdZFsqzJxEUUkU",
  authDomain: "my-portfolio-72e2d.firebaseapp.com",
  projectId: "my-portfolio-72e2d",
  storageBucket: "my-portfolio-72e2d.appspot.com",
  messagingSenderId: "1028146768399",
  appId: "1:1028146768399:web:0413e9c9b801b7e3af117a",
  measurementId: "G-1QFTJ5MZ5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
