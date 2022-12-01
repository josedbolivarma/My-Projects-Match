// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwRH_EcbSd7zPyqMQK-1VDO1oNg4pOWGE",
  authDomain: "my-project-match-34121.firebaseapp.com",
  projectId: "my-project-match-34121",
  storageBucket: "my-project-match-34121.appspot.com",
  messagingSenderId: "762348200714",
  appId: "1:762348200714:web:2fa7982b32ebd24a2b50f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

export {
    app,
    google
}