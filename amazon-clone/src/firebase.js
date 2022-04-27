import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATuUl1w4fnOE6ePaNmvfg4YRt5Z4iL8LM",
  authDomain: "clone-6697b.firebaseapp.com",
  databaseURL: "https://clone-6697b-default-rtdb.firebaseio.com/",
  projectId: "clone-6697b",
  storageBucket: "clone-6697b.appspot.com",
  messagingSenderId: "254237169719",
  appId: "1:254237169719:web:34faf47899acbce5c987b2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
