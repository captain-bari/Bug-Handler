import React, {components, useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import {firebase} from './firebase'
//import {base} from './rebase'



function App() {
  
  useEffect(() => {
    //firebase.auth().signInWithEmailAndPassword("barinde.turkey@gmail.com", "hello123").then((u) => {console.log(u);}).catch((err) => {console.log(err);});
    //firebase.auth().createUserWithEmailAndPassword("barinde.turkey@gmail.com", "hello123").then((u) => {console.log(u);}).catch((err) => {console.log(err);});
    console.log(firebase.auth().currentUser);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
      } else {
        // User not logged in or has just logged out.
      }
    });
  }, [])
 
  console.log(firebase);
  
  console.log(firebase.auth);
  return (
    <div className="App">
    
      <br></br><Login firebase={firebase}/>
    </div>
  );
}

export default App;
