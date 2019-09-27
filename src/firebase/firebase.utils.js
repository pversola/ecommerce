import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC6f01CHC7RvNlPZZr329m58g22XN2sbds",
    authDomain: "ecommerce-32f62.firebaseapp.com",
    databaseURL: "https://ecommerce-32f62.firebaseio.com",
    projectId: "ecommerce-32f62",
    storageBucket: "",
    messagingSenderId: "840520972644",
    appId: "1:840520972644:web:bf6cb10e6f1f489245a271"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase