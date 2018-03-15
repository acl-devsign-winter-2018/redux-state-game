import firebase from 'firebase';

export const config = {
  apiKey: "AIzaSyAByBpNXLG9VHD1uJjzGBkkiNi49G-XYjY",
  authDomain: "connect3-f67b4.firebaseapp.com",
  databaseURL: "https://connect3-f67b4.firebaseio.com",
  projectId: "connect3-f67b4",
  storageBucket: "connect3-f67b4.appspot.com",
  messagingSenderId: "1075923420985"
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const storage = firebase.storage(); //the firebase storage adjunct for images
export const auth = firebaseApp.auth(); //the firebase auth namespace

export const providers = firebase.auth;