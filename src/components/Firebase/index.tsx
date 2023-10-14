// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByzEpdcbpRW4n-9et3UBg3j4PvfPAdbCI",
  authDomain: "memories-app-350418.firebaseapp.com",
  projectId: "memories-app-350418",
  storageBucket: "memories-app-350418.appspot.com",
  messagingSenderId: "13800710643",
  appId: "1:13800710643:web:02999318a3a89f04727286",
  measurementId: "G-HYNLBTLST4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
