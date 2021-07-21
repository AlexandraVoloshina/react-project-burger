import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBd_kYdyvR951BFAphYq_OTPH8348V7jPs",
    authDomain: "very-hot-burgers-35783.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-35783-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;