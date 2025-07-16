// ✅ Real Firebase Configuration — Ready to Use

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3vo-O1vFXLlAAxyZ6L5CraV3zZaRFT9I",
  authDomain: "strmlyapp-130b9.firebaseapp.com", 
  projectId: "strmlyapp-130b9",
  storageBucket: "strmlyapp-130b9.appspot.com",
  messagingSenderId: "625345940627",
  appId: "1:625345940627:web:af41fba3c4ad5f0087d166",
  measurementId: "G-4W8K50MK2C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

// 🔐 Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Store user in Firestore
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        displayName: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
        createdAt: new Date().toISOString()
      });
    }
    
    return {
      displayName: user.displayName || 'User',
      email: user.email || '',
      profilePicture: user.photoURL || ''
    };
  } catch (error) {
    console.error('❌ Error signing in with Google:', error);
    throw error;
  }
};

// 🚪 Sign out
export const logoutUser = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('❌ Error signing out:', error);
    throw error;
  }
};
