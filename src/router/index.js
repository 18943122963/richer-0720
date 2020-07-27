import Vue from "vue";
import VueRouter from "vue-router";
import Column from "../views/Column";
import Row from "../views/Row";
Vue.use(VueRouter);

const routes = [
    {
        path: "/Row",
        name: "Row",
        component: Row,
    },
    {
        path: "/Column",
        name: "Column",
        component: Column,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
