import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyClrh-Entg0ziteI01fA82gS-kAH8-4L1k",
    authDomain: "clothing-app-b7a9a.firebaseapp.com",
    databaseURL: "https://clothing-app-b7a9a.firebaseio.com",
    projectId: "clothing-app-b7a9a",
    storageBucket: "clothing-app-b7a9a.appspot.com",
    messagingSenderId: "540275342779",
    appId: "1:540275342779:web:7d39e31cf30d535832989e"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase