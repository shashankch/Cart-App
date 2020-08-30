import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';





  var firebaseConfig = {
    apiKey: "AIzaSyBsJt2z0SfItNrycKwdIk46U6BBy0v94D0",
    authDomain: "cart-4866d.firebaseapp.com",
    databaseURL: "https://cart-4866d.firebaseio.com",
    projectId: "cart-4866d",
    storageBucket: "cart-4866d.appspot.com",
    messagingSenderId: "203828368207",
    appId: "1:203828368207:web:84146ffab74d970bcbeb3a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
