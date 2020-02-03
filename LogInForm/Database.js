import * as firebase from 'firebase';
var firebaseConfig = {
  
  apiKey: "AIzaSyCNjf1Tysv7jHgZ9gzCkhCy80e28COA0-g",
  authDomain: "quizeartisoft.firebaseapp.com",
  databaseURL: "https://quizeartisoft.firebaseio.com",
  projectId: "quizeartisoft",
  storageBucket: "quizeartisoft.appspot.com",
  messagingSenderId: "447301717945",
  appId: "1:447301717945:web:35701f8c26d82a83e63068",
  measurementId: "G-R4N0FPDE9V"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

export const db = app.database();