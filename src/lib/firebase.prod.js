import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyAJdlatrM27a4mSu0WUpqH-J8EjYIIVLR0",
    authDomain: "netflix-clone-27d69.firebaseapp.com",
    databaseURL: "https://netflix-clone-27d69-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netflix-clone-27d69",
    storageBucket: "netflix-clone-27d69.appspot.com",
    messagingSenderId: "713155195041",
    appId: "1:713155195041:web:c9a134afac1556937f00e0",
    measurementId: "G-VHHWM7P45W"
  };
const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);
export { firebase };
