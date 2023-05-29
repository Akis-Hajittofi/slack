import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA_VzNOhltmyyjFDbM_sVGwF_5i8K7znDA",
  authDomain: "slack-clone-8859e.firebaseapp.com",
  projectId: "slack-clone-8859e",
  storageBucket: "slack-clone-8859e.appspot.com",
  messagingSenderId: "122677980447",
  appId: "1:122677980447:web:3eadd9b40d5727d4c1142a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
