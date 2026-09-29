import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnj9nTDYjdbpPDa_CtkkSXr-6J3ZWDfrw",
    authDomain: "md-notes-414a7.firebaseapp.com",
    projectId: "md-notes-414a7",
    storageBucket: "md-notes-414a7.firebasestorage.app",
    messagingSenderId: "850865858414",
    appId: "1:850865858414:web:d5d1d935ec4df936efc37f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);