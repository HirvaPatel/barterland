import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARtDfcA6anHoCWRDnwr1uT9ICvhpXQn9Q",
    authDomain: "barterland-ae1ce.firebaseapp.com",
    projectId: "barterland-ae1ce",
    storageBucket: "barterland-ae1ce.appspot.com",
    messagingSenderId: "957198256955",
    appId: "1:957198256955:web:4acd7720a364a39964c51e",
    measurementId: "G-04L0TCGVJS"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export default storage;
