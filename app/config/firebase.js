// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzRHZEYSNVXcfPxk05lKkRudhT0PHlSII",
  authDomain: "sos-music-307a3.firebaseapp.com",
  projectId: "sos-music-307a3",
  storageBucket: "sos-music-307a3.firebasestorage.app",
  messagingSenderId: "893957850875",
  appId: "1:893957850875:web:a8b26d590d9a14853a925e",
  measurementId: "G-ZYN9YC7DPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  })
})
const auth = getAuth(app);
export { db, auth, analytics }