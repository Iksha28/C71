import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDQbZHbfv9IbDNXkGi-nKi2Wh68MLuKyeI",
    authDomain: "complaint-forum-f0e78.firebaseapp.com",
    projectId: "complaint-forum-f0e78",
    storageBucket: "complaint-forum-f0e78.appspot.com",
    messagingSenderId: "817075947408",
    appId: "1:817075947408:web:9e1f427fef5f0d37679515"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
