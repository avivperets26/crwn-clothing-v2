import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBQ2xE4r91ROyOkv9dwlgH_kgMDYBPRudo",

  authDomain: "crwn-db-bd38e.firebaseapp.com",

  databaseURL:
    "https://crwn-db-bd38e-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "crwn-db-bd38e",

  storageBucket: "crwn-db-bd38e.appspot.com",

  messagingSenderId: "1088036642414",

  appId: "1:1088036642414:web:58f18618b898f33188d07f",

  measurementId: "G-GFRRZYSG40",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
