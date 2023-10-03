import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHtlO9Ic4JeryUv8mqBMXT0Dh4u4NQBPY",
    authDomain: "admin-dashboard-67e21.firebaseapp.com",
    projectId: "admin-dashboard-67e21",
    storageBucket: "admin-dashboard-67e21.appspot.com",
    messagingSenderId: "332653232168",
    appId: "1:332653232168:web:9df0c99cf837ad5969f51d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
