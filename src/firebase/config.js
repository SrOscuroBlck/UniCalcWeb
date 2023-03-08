// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    collection,
    getDocs
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA78ns65TuK1Fe_v4Z3srVQ1hYpDw11T1E",
  authDomain: "unicalcweb.firebaseapp.com",
  projectId: "unicalcweb",
  storageBucket: "unicalcweb.appspot.com",
  messagingSenderId: "788553808636",
  appId: "1:788553808636:web:d7461b986f79e04b5bf579"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getRegisters = async () => {
    const registersReference = collection(db, "Registers");
    const snapshot = await getDocs(registersReference);
    const registers = snapshot.docs.map((doc) =>  {
        return { 
            ...doc.data()
        }
    })
    return registers;
}