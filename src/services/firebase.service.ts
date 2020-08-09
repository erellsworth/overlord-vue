import firebase from "firebase";

export class FirebaseService {
    private credentials = {
        apiKey: "AIzaSyDS1JkRgXw-ULvr4SoZrKJAxzaQUOsRTgE",
        authDomain: "er-ellsworth.firebaseapp.com",
        databaseURL: "https://er-ellsworth.firebaseio.com",
        projectId: "er-ellsworth",
        storageBucket: "er-ellsworth.appspot.com",
        messagingSenderId: "1030516368098",
        appId: "1:1030516368098:web:6f251ef6e9dc536189b4bb",
        measurementId: "G-WL5QNG0D8B"
    };

    private firebase: firebase.app.App;
    private provider: firebase.auth.GoogleAuthProvider;

    constructor() {
        this.firebase = firebase.initializeApp(this.credentials);
        this.provider = new firebase.auth.GoogleAuthProvider();
    }

    /**
     * login
     */
    public async login() {

        const credentials = await this.firebase.auth().signInWithPopup(this.provider);

        console.log('credentials', credentials);
    }
}
