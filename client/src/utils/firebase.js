
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"



const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-eb80d.firebaseapp.com",
  projectId: "authexamnotes-eb80d",
  storageBucket: "authexamnotes-eb80d.firebasestorage.app",
  messagingSenderId: "313594532613",
  appId: "1:313594532613:web:ec969ecc856607903ddd6c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}