import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj6xAuj3kmq2D3yScR8oNoS4JEMTsSIRo",
    authDomain: "slack-clone-3356e.firebaseapp.com",
    projectId: "slack-clone-3356e",
    storageBucket: "slack-clone-3356e.appspot.com",
    messagingSenderId: "773037282976",
    appId: "1:773037282976:web:c68f767ed09e8e5b305bc5",
    measurementId: "G-6LM7JPCNRE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
