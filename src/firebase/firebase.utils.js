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

// Basically do it for Google here instead of in the service
// Gives access to GoogleAuthProvider
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// Prompt select account popup everytime
googleAuthProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsub = auth.onAuthStateChanged(userAuth => {
      unsub()
      resolve(userAuth)
    }, reject)
  })
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  // Get entire collection and get snapshots of each document in the collection
  // const collectionRef = firestore.collection('users')
  // const collectionSnapshot = await collectionRef.get()
  // console.log({collection: collectionSnapshot.docs.map(doc => doc.data())});
  
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  
  // Do a batch write
  
  // Loop through the array and add them to batch
  objectsToAdd.forEach(object => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });
  
  // Send a batch
  return await batch.commit();
};

// Map CollectionsOverview to document Arrays
export const convertCollectionsSnapShotToMap = (collection) => {
  const transformed = collection.docs.map(doc => {
    const {title, items} = doc.data();
    const {id} = doc;
    
    return {
      routeName: encodeURI(title.toLowerCase()),
      id,
      title,
      items
    };
  });
  // For each but accumulator goes through the array linearly with .push at the end of each iteration.
  return transformed.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
