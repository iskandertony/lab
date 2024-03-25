import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsZgcKA_ht6WtBKFaFjlfXR9YMGWy-Df0",
  authDomain: "iskalab-1e29d.firebaseapp.com",
  projectId: "iskalab-1e29d",
  storageBucket: "iskalab-1e29d.appspot.com",
  messagingSenderId: "361412531134",
  appId: "1:361412531134:web:6c3aa0b19c86f9812adfef",
  measurementId: "G-7D5PNTTQ02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
