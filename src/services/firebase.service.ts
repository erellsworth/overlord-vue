import { auth, initializeApp } from "firebase";
import { Service } from '.';

type User = firebase.User | null;

class FirebaseService extends Service {

    private credentials = {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.VUE_APP_FIREBASE_API_DATABASE_URL,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID,
        appId: process.env.VUE_APP_FIREBASE_APP_ID,
        measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
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
            if (user && this.currentPathMatches('/login')) {
                this.navigate('/');
            }

            if (!user && !this.currentPathMatches('/login')) {
                this.navigate('/login');
            }
        });
    }

    /**
     * login
     */
    public login() {
        this.firebase.auth().signInWithPopup(this.provider);
    }

    /**
     * logout
     */
    public logout() {
        this.firebase.auth().signOut();
    }

    public isAnOverlord(): boolean {
        return this.user !== null;
    }
}

export default new FirebaseService();