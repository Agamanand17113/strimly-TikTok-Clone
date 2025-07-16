// Firebase Configuration Template
// To use real Firebase, replace these values with your Firebase project config

export const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com", 
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// For now, we're using localStorage for demo purposes
// Once you connect Firebase:
// 1. Install Firebase: npm install firebase
// 2. Replace the config above with your actual Firebase config
// 3. Uncomment the code below and update AuthScreen.tsx to use real Firebase auth

/*
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Store user data in Firestore
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
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};
*/