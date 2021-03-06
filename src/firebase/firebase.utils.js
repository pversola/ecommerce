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

export const createUserProfileDocument = async (userAuth, additinalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth
        const createAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additinalData  
            })
        } catch (error) {
            console.log('error createing user', error.message)
        }
    }
    
    return userRef
}

firebase.initializeApp(config)

export const addCollectionAndDocuments = async (
    collectionKey, 
    objectToAdd
) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase