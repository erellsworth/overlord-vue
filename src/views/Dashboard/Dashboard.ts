
import { Component, Vue } from 'vue-property-decorator';
import firebase from '../../services/firebase.service';

import {
    Quasar,
    QLayout,
    QPageContainer,
    QPage,
    QHeader,
    QFooter,
    QDrawer,
    QPageSticky,
    QPageScroller,
    QMenu,
    ClosePopup
} from 'quasar';

Vue.use(Quasar);

const data = {
    menuOpen: false,
    isAnOverlord: false
}

firebase.user.subscribe(() => {
    data.isAnOverlord = firebase.isAnOverlord();
});

@Component({
    name: "DashboardLayout",
    directives: {
        ClosePopup
    },
    components: {
        QLayout,
        QPageContainer,
        QPage,
        QHeader,
        QFooter,
        QDrawer,
        QPageSticky,
        QPageScroller,
        QMenu
    },
    methods: {
        logout: () => {
            firebase.logout();
        }
    }
})
export default class Dashboard extends Vue {
    data() {
        return data;
    }
}
