

import  {initializeApp}  from "firebase/app";

import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBPrJ0l2byD4w1JAvFW0SpSNRKNZlBS5IE",
  authDomain: "shopshutter-477e2.firebaseapp.com",
  projectId: "shopshutter-477e2",
  storageBucket: "shopshutter-477e2.appspot.com",
  messagingSenderId: "1006660620149",
  appId: "1:1006660620149:web:82087c6d3e10599bc84d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export default app;