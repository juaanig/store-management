import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9iJ7miHMXjknD_JKrOW0XyzF0ah2CtFM",
  authDomain: "smapi-2022.firebaseapp.com",
  projectId: "smapi-2022",
  storageBucket: "smapi-2022.appspot.com",
  messagingSenderId: "542111273637",
  appId: "1:542111273637:web:d7993df97263eeb30b734c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 