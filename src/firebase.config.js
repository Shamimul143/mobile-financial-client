// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_apiKey,
    // authDomain: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_projectId,
    // messagingSenderId: import.meta.env.VITE_storageBucket,
    // appId: import.meta.env.VITE_messagingSenderId,

    apiKey: "AIzaSyCAN9XJ5fU-mvIEdO1p1kZjeBs53R6kHwY",
  authDomain: "mobile-financial-service-a37f8.firebaseapp.com",
  projectId: "mobile-financial-service-a37f8",
  storageBucket: "mobile-financial-service-a37f8.appspot.com",
  messagingSenderId: "1050287193588",
  appId: "1:1050287193588:web:1f17315f66a2d0fc9b8da1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);