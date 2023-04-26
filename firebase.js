import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAYg_l7jts8S8HcP_1DKkLucjLcVaM1yrw",
  authDomain: "detour-1e1a5.firebaseapp.com",
  projectId: "detour-1e1a5",
  storageBucket: "detour-1e1a5.appspot.com",
  messagingSenderId: "285462772442",
  appId: "1:285462772442:web:0e996a4d5315ac5a5dc3e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app,db}
