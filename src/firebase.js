// import firebase from 'firebase/compat/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyBY07IIhllWq3nB7kcH0h0QNjry03KnaT8",
//     authDomain: "slack-a2634.firebaseapp.com",
//     databaseURL: "https://slack-a2634.firebaseio.com",
//     projectId: "slack-a2634",
//     storageBucket: "slack-a2634.appspot.com",
//     messagingSenderId: "415771172846",
//     appId: "1:415771172846:web:612d2949c5925e031c78ff"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig)

// const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()

// export { auth, provider }
// export default db
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
