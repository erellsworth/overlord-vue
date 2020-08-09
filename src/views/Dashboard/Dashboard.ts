
import { Component, Vue } from 'vue-property-decorator';
import './Dashboard.module.scss';

import {
    Quasar,
    QLayout,
    QPageContainer,
    QPage,
    QHeader,
    QFooter,
    QDrawer,
    QPageSticky,
    QPageScroller
} from 'quasar';

Vue.use(Quasar);

@Component({
    name: "DashboardLayout",
    components: {
        QLayout,
        QPageContainer,
        QPage,
        QHeader,
        QFooter,
        QDrawer,
        QPageSticky,
        QPageScroller
    },
})
export default class Dashboard extends Vue {
    data() {
        return {
            menuOpen: false
        }
    }
}
