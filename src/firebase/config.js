import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDtiszZCKVYK6FJFGzJDeo5NFUitofqM8U",
  authDomain: "pasteles-react.firebaseapp.com",
  projectId: "pasteles-react",
  storageBucket: "pasteles-react.firebasestorage.app",
  messagingSenderId: "494660916959",
  appId: "1:494660916959:web:b59a0312d2c5092994bb6a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)