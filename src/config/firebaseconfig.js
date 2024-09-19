import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmkOxmcMvo_ixO9o0SIQkzGCy_4qjJOsA",
    authDomain: "react-router-firebase-todo-app.firebaseapp.com",
    projectId: "react-router-firebase-todo-app",
    storageBucket: "react-router-firebase-todo-app.appspot.com",
    messagingSenderId: "334479519603",
    appId: "1:334479519603:web:0e509d37aa1260938f1f06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);