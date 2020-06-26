import React, {components, useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import Dash from "./components/dash"
import {firebase} from './firebase'




function App() {

  const [user , updateuser] = useState(false);

  useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        updateuser(true);
        
      } else {
        updateuser(false);
      }
    });


  }, [])
 
  
  return (
    <div className="App">
      
      { user ? (<Dash/>) : (<Login/>)}
    
      
    </div>
  );
}

export default App;
