// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithRedirect,
  getRedirectResult, signOut, 
  updateCurrentUser} from "firebase/auth";
import { createContext, useContext,  useEffect, useState } from 'react'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMIAN,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID, 
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSANGING_SENDER_ID ,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRedirectResult(auth)
    .then((result) => {
      if (result) {
        setUser(result.user);
      }
    })
  })
  .catch((error) => {
    console.error('Redirect sign-in error:', error);

  })
  .finally(() => {
    setLoading(false);
  });
  return(
    <AuthContext.Provider value={{ user, loading, signIn, signOutUser}}>
      {children}
    </AuthContext.Provider>
  );
  

  const unsubscribe = auth.onAuthStateChanged((currentUser) =>{
    setUser(currentUser);
    if(currentUser) {
      setLoading(false);
    }
  });
  return () => unsubscribe();
}[]; 
const signIn = async () => {
  try {
    await signInWithRedirect(auth, provider);
  }catch (error) {
    console.error('Sign-in error:', error);
  }
};
const signOutUser = async () => {
  try {
    await signOut(auth);
    setUser(null);
  }catch(error) {
    console.error('Sign-out error:', error);
  }
};

export const useAuth = () => useContext(AuthContext);