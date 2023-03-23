import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import {getFirestore} from 'firebase/firestore' 


const firebaseConfig = {
    apiKey: "AIzaSyBry011n-VWnBK06mEslF-7FV7PJqLZIcM",
    authDomain: "codertienda-76d6e.firebaseapp.com",
    projectId: "codertienda-76d6e",
    storageBucket: "codertienda-76d6e.appspot.com",
    messagingSenderId: "16002027400",
    appId: "1:16002027400:web:3556b5433d983d211d343d"
  };
  
  // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore()