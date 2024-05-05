import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRROWCUWNvYMuCTGLt1o7dC0pqHMgAJ_A",
    authDomain: "admin-project-d754a.firebaseapp.com",
    projectId: "admin-project-d754a",
    storageBucket: "admin-project-d754a.appspot.com",
    messagingSenderId: "356778125801",
    appId: "1:356778125801:web:b9307f25084efa2150c378"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
