import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEXaXfDeuHAMXsmUjRpI01dXUoh1Z_Cpw",
  authDomain: "keneat.firebaseapp.com",
  projectId: "keneat",
  storageBucket: "keneat.appspot.com",
  messagingSenderId: "383600049383",
  appId: "1:383600049383:web:94aa60c1c5e6d022b07642"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
