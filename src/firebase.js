import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1orWGKMnSa-sH08AjQQrYkMWKDh_lHq4",
    authDomain: "chat-app-bad10.firebaseapp.com",
    projectId: "chat-app-bad10",
    storageBucket: "chat-app-bad10.appspot.com",
    messagingSenderId: "503688420881",
    appId: "1:503688420881:web:d1ccb7dca944dcacaf5bb0",
    measurementId: "G-YLFZVDEHSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };

export default app;
