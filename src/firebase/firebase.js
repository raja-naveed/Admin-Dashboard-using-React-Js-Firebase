import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXWXhps7p4ITcbadJXQUYW9FamWzm43Gg",
    authDomain: "reacttt-74d18.firebaseapp.com",
    projectId: "reacttt-74d18",
    storageBucket: "reacttt-74d18.appspot.com",
    messagingSenderId: "1034459102717",
    appId: "1:1034459102717:web:75bb508267e1a5c4d0ed94"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
