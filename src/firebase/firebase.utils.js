
import { initializeApp } from 'firebase/app';
import {
getAuth, 
createUserWithEmailAndPassword,
signInWithPopup ,
signOut,
signInWithEmailAndPassword,
onAuthStateChanged,
GoogleAuthProvider} from 'firebase/auth';
import{ getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB6RsuAbqRmXsUNzBikBI1nqptjbEbgSYI",
  authDomain: "a-to-z-1a377.firebaseapp.com",
  projectId: "a-to-z-1a377",
  storageBucket: "a-to-z-1a377.appspot.com",
  messagingSenderId: "666958543947",
  appId: "1:666958543947:web:0d81761732d2e38c4121ce"
};

// Initialize Firebase
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

