import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyChaR63cUhHO9e50b3yM5xKu5D-1Rajacs",
    authDomain: "fir-cb7af.firebaseapp.com",
    projectId: "fir-cb7af",
    storageBucket: "fir-cb7af.appspot.com",
    messagingSenderId: "722944291787",
    appId: "1:722944291787:web:aedb7bd13403844a3efc4e",
    measurementId: "G-D7041DS1L1"
  };

 export default  firebase.initializeApp(firebaseConfig)