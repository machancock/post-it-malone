import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDO4W-RR2S4WKODTVsxEaliarzK6LuwuEg",
    authDomain: "todoist-copy.firebaseapp.com",
    databaseURL: "https://todoist-copy.firebaseio.com",
    projectId: "todoist-copy",
    storageBucket: "todoist-copy.appspot.com",
    messagingSenderId: "808014175035",
    appId: "1:808014175035:web:60fdcc726bd6ebde"
});

export { firebaseConfig as firebase };