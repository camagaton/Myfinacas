import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyD2HU5oGNzdwIgJSBAPqHFGg78Pxcj1s5o",
    authDomain: "myfinancas-f2e12.firebaseapp.com",
    projectId: "myfinancas-f2e12",
    storageBucket: "myfinancas-f2e12.appspot.com",
    messagingSenderId: "1036452718135",
    appId: "1:1036452718135:web:1fefcef99d2bdba2c701b2"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;