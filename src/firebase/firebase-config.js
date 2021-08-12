import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCiyUfjh-ZO7jHpcFZ9nAhRwM_eM-ZQeTg",
  authDomain: "react-app-curso-106e5.firebaseapp.com",
  projectId: "react-app-curso-106e5",
  storageBucket: "react-app-curso-106e5.appspot.com",
  messagingSenderId: "1019746513494",
  appId: "1:1019746513494:web:cdf30cd5218e4b091b01f7",
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyD5-4gUUrMLCzTWDEJ3QpkmfIboN5PDCq4",
//     authDomain: "push-one-signal-17ede.firebaseapp.com",
//     databaseURL: "https://push-one-signal-17ede.firebaseio.com",
//     projectId: "push-one-signal-17ede",
//     storageBucket: "push-one-signal-17ede.appspot.com",
//     messagingSenderId: "803724161810",
//     appId: "1:803724161810:web:02f32ebc98a71e376339cb"
//   };

// if( process.env.NODE_ENV === 'test' ) {
//     // testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
// dev/prod
// firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
