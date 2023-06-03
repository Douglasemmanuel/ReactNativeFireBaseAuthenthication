// import  * as   firebase from "firebase";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore'

import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAm_JxCbTmOMRqwgTGzH3f2Oq8SPfpeV68",
    authDomain: "learnreactnativeauth2121.firebaseapp.com",
    projectId: "learnreactnativeauth2121",
    storageBucket: "learnreactnativeauth2121.appspot.com",
    messagingSenderId: "490188259758",
    appId: "1:490188259758:web:c24ca6643820f0c36fc83f",
    measurementId: "G-Z06WEH0EL6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
// let app;
// if(!firebase.apps.length  === 0 ){
//     app = firebase.initializeApp(firebaseConfig);
// }else{
//     app = firebase.app()
// }

// const auth = firebase.auth()
export {auth ,db};
