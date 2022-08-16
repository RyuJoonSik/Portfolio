import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyO0KYxKi29lAezuau8NdZFsqzJxEUUkU",
  authDomain: "my-portfolio-72e2d.firebaseapp.com",
  projectId: "my-portfolio-72e2d",
  storageBucket: "my-portfolio-72e2d.appspot.com",
  messagingSenderId: "1028146768399",
  appId: "1:1028146768399:web:0413e9c9b801b7e3af117a",
  measurementId: "G-1QFTJ5MZ5M",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
