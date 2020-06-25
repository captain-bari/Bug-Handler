import firebase from 'firebase';
import 'firebase/firestore'
import "firebase/auth";
import "firebase/firestore";
 
const firebaseConfigs = {
   /* apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: "1:994880379089:web:bd24da8d676a1fd0758df0",
    measurementId: "G-KM2ZDTEXZ7"
    */
    apiKey: "AIzaSyDrK6rf-5LAeU6SS0Qja2Vr2zSMhjTA4Zg",
    authDomain: "bug-tracker-b9b69.firebaseapp.com",
    databaseURL: "https://bug-tracker-b9b69.firebaseio.com",
    projectId: "bug-tracker-b9b69",
    storageBucket: "bug-tracker-b9b69.appspot.com",
    messagingSenderId: "994880379089",
    appId: "1:994880379089:web:bd24da8d676a1fd0758df0",
    measurementId: "G-KM2ZDTEXZ7"
  };
  
  firebase.initializeApp(firebaseConfigs);
  

  export {firebase}