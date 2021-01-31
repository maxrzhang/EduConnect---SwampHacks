import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDTmGZtlbduSlq0BWskgLQ0dmeEA4fzn3Q",
    authDomain: "forum-f6dde.firebaseapp.com",
    projectId: "forum-f6dde",
    storageBucket: "forum-f6dde.appspot.com",
    messagingSenderId: "535809881127",
    appId: "1:535809881127:web:3a130de5e6cde0b7e18a02",
    measurementId: "G-GS1WL5EP19"
})

const db = firebaseApp.firestore();
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage };