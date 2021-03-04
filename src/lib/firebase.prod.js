import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
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
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
