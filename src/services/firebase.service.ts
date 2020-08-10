import { auth, initializeApp } from "firebase";
import { Service } from '.';

type User = firebase.User | null;

class FirebaseService extends Service {

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
    private user: User = null;

    constructor() {
        super();
        this.firebase = initializeApp(this.credentials);
        this.provider = new auth.GoogleAuthProvider();
        this.firebase.auth().onAuthStateChanged((user: User) => {
            this.user = user;
            if (this.user && this.currentPathMatches('/login')) {
                this.navigate('/');
            }
        });
    }

    /**
     * login
     */
    public async login() {
        const credentials = await this.firebase.auth().signInWithPopup(this.provider);
        this.user = credentials.user;
        this.navigate('/');
    }

    public isAnOverlord(): boolean {
        return this.user !== null;
    }
}

export default new FirebaseService();