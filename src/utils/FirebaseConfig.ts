// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK_tZCNnpcfImTh9Im6FzSZfytAjfFDGo",
  authDomain: "pokemonapp-7c436.firebaseapp.com",
  projectId: "pokemonapp-7c436",
  storageBucket: "pokemonapp-7c436.firebasestorage.app",
  messagingSenderId: "936379529277",
  appId: "1:936379529277:web:8aee31964c3f89659d9254",
  measurementId: "G-QK3Q7WWQ32",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app)

export const usersRef = collection(firebaseDB, "users")
export const pokemonListRef = collection(firebaseDB, "pokemonList")
