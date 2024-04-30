// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getStorage, getDownloadURL, ref} from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtovxZnsBwuXrnEMbOLkvBjqhEdF4L_WU",
  authDomain: "authblog-abc.firebaseapp.com",
  projectId: "authblog-abc",
  storageBucket: "authblog-abc.appspot.com",
  messagingSenderId: "902485505885",
  appId: "1:902485505885:web:d39496beecd3b15b481ab4",
  measurementId: "G-2ZXPQT5F7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const firestore = getFirestore(app);
const storage = getStorage(app);

// const getImageURL = (path) => {
//   return getDownloadURL(ref(storage, path));
// }

export {app, auth, firestore, storage};