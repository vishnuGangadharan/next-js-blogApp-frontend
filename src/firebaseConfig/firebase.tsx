// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyD4uZeW5od-1OlLpSkJcu3vOCBW5eio5OU",
  authDomain: "nextblogapp-6fd0d.firebaseapp.com",
  projectId: "nextblogapp-6fd0d",
  storageBucket: "nextblogapp-6fd0d.appspot.com",
  messagingSenderId: "888700012606",
  appId: "1:888700012606:web:34195e71044d83004ea96f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export { storage }