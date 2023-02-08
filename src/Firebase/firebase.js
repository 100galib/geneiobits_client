import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from './Firebase.config';


const auth = getAuth(app);
const porvider = new GoogleAuthProvider();


export {auth, porvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup}