
import { Component, Vue } from "vue-property-decorator";
import firebase from '../../../services/firebase.service';
import {
    QCard,
    QCardSection,
    QCardActions,
    QBtn
} from 'quasar';

@Component(
    {
        components: {
            QCard,
            QCardSection,
            QCardActions,
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
