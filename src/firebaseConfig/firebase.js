import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore";

/*const firebaseConfig = {
  apiKey: "AIzaSyD9iJ7miHMXjknD_JKrOW0XyzF0ah2CtFM",
  authDomain: "smapi-2022.firebaseapp.com",
  projectId: "smapi-2022",
  storageBucket: "smapi-2022.appspot.com",
  messagingSenderId: "542111273637",
  appId: "1:542111273637:web:d7993df97263eeb30b734c"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyDRFR6wFesyMSavXo7jLI6MHFmZBpc1j80",
  authDomain: "store-managment2.firebaseapp.com",
  projectId: "store-managment2",
  storageBucket: "store-managment2.appspot.com",
  messagingSenderId: "548740607357",
  appId: "1:548740607357:web:2183ca08402ad03b6fb014"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 