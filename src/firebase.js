import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTwGU2LhTYYtwbVpW4frb5MmXgW_Y1QwM",
  authDomain: "image-gallery-e92e9.firebaseapp.com",
  projectId: "image-gallery-e92e9",
  storageBucket: "image-gallery-e92e9.appspot.com",
  messagingSenderId: "348486239837",
  appId: "1:348486239837:web:b46003e66508915df8afb4",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
