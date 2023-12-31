
import { initializeApp } from 'firebase/app';
import {
getAuth, 
createUserWithEmailAndPassword,
signInWithPopup ,
signOut,
signInWithEmailAndPassword,
GoogleAuthProvider} from 'firebase/auth';
import{ getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore()

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
   return await createUserWithEmailAndPassword(auth , email ,password)
}

export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
   return await signInWithEmailAndPassword(auth , email ,password)
}
export const signOutUser = async() => await signOut(auth);

