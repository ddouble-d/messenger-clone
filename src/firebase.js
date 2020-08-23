import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDyvLXhoRQxejMLM-E9tFvYrVc65a8-4wE",
    authDomain: "fb-messenger-clone-8da28.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-8da28.firebaseio.com",
    projectId: "fb-messenger-clone-8da28",
    storageBucket: "fb-messenger-clone-8da28.appspot.com",
    messagingSenderId: "268882938148",
    appId: "1:268882938148:web:222686f4f2b2b3f62ecbb1",
    measurementId: "G-Z8YYP7E6Z0"
});

const db = firebaseApp.firestore();

export default db;