import firebase from 'firebase'
import "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyDV89VuPL8tsWaL3P05JXlaPCwTUKMRHV0",
    authDomain: "citl-6e6b5.firebaseapp.com",
    databaseURL: "https://citl-6e6b5.firebaseio.com",
    projectId: "citl-6e6b5",
    storageBucket: "citl-6e6b5.appspot.com",
    messagingSenderId: "751463979877",
    appId: "1:751463979877:web:c6b5db766d276d4421df8c",
    measurementId: "G-NLE7KHNDB0"
  };
  


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }