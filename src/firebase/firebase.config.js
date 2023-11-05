// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4gyFbCppBAQBLLDfeelrW7W841I2TOtE",
  authDomain: "hotel-management-beb7b.firebaseapp.com",
  projectId: "hotel-management-beb7b",
  storageBucket: "hotel-management-beb7b.appspot.com",
  messagingSenderId: "541262475103",
  appId: "1:541262475103:web:abf16dc444b58f57e290ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app