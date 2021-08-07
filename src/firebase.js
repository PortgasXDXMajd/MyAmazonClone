import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDVtiGS0E4Mj-Fga1Y8S0kQ-MS2QJGdBro",
  authDomain: "myamazomclone.firebaseapp.com",
  projectId: "myamazomclone",
  storageBucket: "myamazomclone.appspot.com",
  messagingSenderId: "457622741524",
  appId: "1:457622741524:web:3f28f9952046a5f7363d01"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export default db;
export  {auth};