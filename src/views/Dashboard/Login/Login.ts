
import { Component, Vue } from "vue-property-decorator";
import "./Login.module.scss";
import firebase from '../../../services/firebase.service';
import { QBtn } from 'quasar';

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
