import firebase from "firebase/app";
import "firebase/firestore";

// const firebaseApp = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// };

const firebaseApp = {
  apiKey: "AIzaSyDtevMfXHg4P9KhDyaQBya9dRz5CXxVZ7A",
  authDomain: "my-massenger-by-rj.firebaseapp.com",
  databaseURL: "https://my-massenger-by-rj-default-rtdb.firebaseio.com",
  projectId: "my-massenger-by-rj",
  storageBucket: "my-massenger-by-rj.appspot.com",
  messagingSenderId: "748465286507",
  appId: "1:748465286507:web:3cdecb205a2c869d2c302e",
  measurementId: "G-6X8C0LYBEX",
};

firebase.initializeApp(firebaseApp);

const db = firebase.firestore();
export default db;
