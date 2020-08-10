import VueRouter from 'vue-router';

class Service {
    public router?: VueRouter;

    public navigate(route: string) {
        if (!this.router) { return; }
        this.router.push(route);
    }

    /**
     * currentPath
     */
    public currentPath(): string {
        if (!this.router) { return ''; }

        return this.router.currentRoute.path;
    }

    /**
     * currentPathMatches
     */
    public currentPathMatches(path: string): boolean {
        if (!this.router) { return false; }
        return this.router.currentRoute.path === path;
    }
}

export {
    Service
}
