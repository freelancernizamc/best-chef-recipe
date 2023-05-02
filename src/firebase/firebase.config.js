// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgc1SkVF5eWMW1btBwx9EUfWFzP9EWzPI",
    authDomain: "assignment-10-client-2c6e3.firebaseapp.com",
    projectId: "assignment-10-client-2c6e3",
    storageBucket: "assignment-10-client-2c6e3.appspot.com",
    messagingSenderId: "213815897479",
    appId: "1:213815897479:web:3ac14926202dec79b5b722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;