import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCBMHkZtIbpA7hiCc_539EiuMvrEl8EMlI",
    authDomain: "portfolio-lab-f3a68.firebaseapp.com",
    databaseURL: "https://portfolio-lab-f3a68.firebaseio.com",
    projectId: "portfolio-lab-f3a68",
    storageBucket: "portfolio-lab-f3a68.appspot.com",
    messagingSenderId: "1061186773621",
    appId: "1:1061186773621:web:9d3c042b1ae874bd804e3c",
    measurementId: "G-FHZDS3RBSB"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

}

export default Firebase;


