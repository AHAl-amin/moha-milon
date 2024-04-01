// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLsYZZbO1eLIhWuRLAJXnFWANC5wrsJYE",
  authDomain: "auth-moha-milon-bb6e1.firebaseapp.com",
  projectId: "auth-moha-milon-bb6e1",
  storageBucket: "auth-moha-milon-bb6e1.appspot.com",
  messagingSenderId: "495977658206",
  appId: "1:495977658206:web:6f0de3abc4b437463c41cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;