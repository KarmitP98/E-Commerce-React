import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Configure Firebase manually
firebase.initializeApp({
    apiKey: 'AIzaSyArznR5_UOWE0SKl3x3StgFe-V6b3mILsE',
    authDomain: 'e-commerce-react-v1.firebaseapp.com',
    projectId: 'e-commerce-react-v1',
    storageBucket: 'e-commerce-react-v1.appspot.com',
    messagingSenderId: '119416478711',
    appId: '1:119416478711:web:257da00001c5e2c65eacf2',
    measurementId: 'G-1SE49FXN48',
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Basically do it for Google here instead of in the serivce
// Gives access to GoogleAuthProvider
const provider = new firebase.auth.GoogleAuthProvider();
// Prompt select account popup eveytime
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (e) {
            console.log(e.message);
        }
    }

    return userRef;
};

export default firebase;
