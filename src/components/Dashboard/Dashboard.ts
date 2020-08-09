
import { Component, Vue } from 'vue-property-decorator';
import './Dashboard.module.scss';
import Login from '../Login/Login.vue';
import {
    Quasar,
    QToolbar,
    QToolbarTitle
} from 'quasar';


Vue.use(Quasar);

@Component({
    components: {
        Login,
        QToolbar,
        QToolbarTitle
    },
})
export default class Dashboard extends Vue {
}
