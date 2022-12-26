import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { env } from "../env/client.mjs";

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "thecinephilehouse.firebaseapp.com",
  projectId: "thecinephilehouse",
  storageBucket: "thecinephilehouse.appspot.com",
  messagingSenderId: "202553154245",
  appId: "1:202553154245:web:e093de6008a6358115eeac",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseFirestore = getFirestore(firebaseApp);

export { firebaseAuth, firebaseFirestore };
