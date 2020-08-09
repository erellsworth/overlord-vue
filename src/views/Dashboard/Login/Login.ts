
import { Component, Vue } from "vue-property-decorator";
import "./Login.module.scss";
import { FirebaseService } from '../../../services/firebase.service';
import { QBtn } from 'quasar';

const firebase = new FirebaseService();

@Component(
    {
        components: {
            QBtn
        },
        methods: {
            login: () => {
                firebase.login();
            }
        }
    }
)
export default class Login extends Vue { }
