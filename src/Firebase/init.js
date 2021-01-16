import firebase from 'firebase'
import firestore from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var Config = {
    apiKey: "AIzaSyAqG5sIL9Sg-146Xyzrdjb5b4m6IBYcR-k",
    authDomain: "chatapp-4237d.firebaseapp.com",
    projectId: "chatapp-4237d",
    storageBucket: "chatapp-4237d.appspot.com",
    messagingSenderId: "404950253354",
    appId: "1:404950253354:web:9d676301ce25d2aeeb2853",
    measurementId: "G-PCMB0ZHJXS"
  };
  const firebaseApp = firebase.initializeApp(Config);

  export default firebaseApp.firestore();

