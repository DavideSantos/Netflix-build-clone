import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSsvTPR8qO6HecJHbZgDdq-L3TRgbB7iE",
  authDomain: "netflix-build-clone-b4745.firebaseapp.com",
  projectId: "netflix-build-clone-b4745",
  storageBucket: "netflix-build-clone-b4745.appspot.com",
  messagingSenderId: "53420781623",
  appId: "1:53420781623:web:f3934ad186c290bd070fb2",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
