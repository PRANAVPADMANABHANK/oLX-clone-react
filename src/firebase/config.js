import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABiLlgvSI9Btj7FmcJTI1Wf614Pi6_S2M",
  authDomain: "fir-fe3a5.firebaseapp.com",
  projectId: "fir-fe3a5",
  storageBucket: "fir-fe3a5.appspot.com",
  messagingSenderId: "668755149420",
  appId: "1:668755149420:web:17c693087b4e6ab26f4e49",
  measurementId: "G-9S6F418TSV"
};

firebase.initializeApp(firebaseConfig);

export default firebase;