import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from 'firebase/auth';


let config = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  databaseURL: import.meta.env.VITE_databaseURL,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

  back4app_appId:import.meta.env.VITE_Back4App_AppId,
  back4app_jsKey:import.meta.env.VIET_Back4App_JSKey
};
// const config = {
//   apiKey: "AIzaSyBd93kruaPyloWaKjF7jXQtY9wrFOO6-9k",
//   authDomain: "plaque-c4c32.firebaseapp.com",
//   databaseURL: "https://plaque-c4c32.firebaseio.com",
//   projectId: "plaque-c4c32",
//   storageBucket: "plaque-c4c32.appspot.com",
//   messagingSenderId: "989823646962",
//   appId: "1:989823646962:web:3329bcc51d332201b5a46b"
// };


const firebaseApp = initializeApp(config);
const db = getFirestore();
const auth = getAuth();



export {firebaseApp, auth, db};
