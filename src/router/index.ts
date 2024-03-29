import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/signin',
        component: () => import('../components/Sign/Sign.vue'),
    },
    {
        path: '/visitStore/:id/:title',
        component: () => import('../components/body/pages/visitStore.vue'),
    },
    /* cart shop */
    {
        path: '/Cart',
        component: () => import('../components/cart/Cart.vue'),
        props: true,
    },
    /* ProductDetalis */
    {
        path: '/ProductDetalis/:id',
        name: 'ProductDetails',
        component: () => import('../components/global/ProductDetalis.vue'),
        props: true,
    },
    {
        path: '/ListView/:id/:name/:short_des',
        component: () => import('../components/global/ListView.vue'),
        props: true,
    },
    {
        path: '/ProductDetailsStore/:title/:id_store/:id',
        component: () =>
            import('../components/body/pages/ProductDetailsStore.vue'),
    },
    /* services or section */
    {
        path: '/',
        name: 'home',
        component: () => import('../views/section/home.vue'),
    },
    {
        path: '/festival',
        name: 'festival',
        component: () => import('../views/section/festival.vue'),
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/section/products.vue'),
    },
    {
        path: '/company',
        name: 'company',
        component: () => import('../views/section/company.vue'),
    },
    {
        path: '/professional',
        name: 'professional',
        component: () => import('../views/section/professional.vue'),
    },
    {
        path: '/medic',
        name: 'medic',
        component: () => import('../views/section/medic.vue'),
    },
    //doctor
    {
        path: '/doctors',
        name: 'doctors',
        component: () => import('../views/section/doctors.vue'),
    },
    {
        path: '/visit_doctor/:id/:first_name',
        name: 'visitDoctor',
        component: () =>
            import('../components/body/doctors/visitDoctor.vue'),
    },
    //restaurant
    {
        path: '/resturants',
        name: 'resturants',
        component: () => import('../views/section/resturants.vue'),
    },
    {
        path: '/visit_restaurant/:id/:title',
        name: 'visitRestaurant',
        component: () =>
            import('../components/body/restaurant/visitRestaurant.vue'),
    },
    {
        path: '/instrc',
        name: 'instrc',
        component: () => import('../views/section/instrc.vue'),
    },
    {
        path: '/stores',
        name: 'stores',
        component: () => import('../views/section/stores.vue'),
    },
    /* Categories */
    {
        path: '/buty',
        name: 'buty',
        component: () => import('../views/categories/buty.vue'),
    },
    {
        path: '/mobile',
        name: 'mobile',
        component: () => import('../views/categories/mobile.vue'),
    },
    {
        path: '/computer',
        name: 'computer',
        component: () => import('../views/categories/computer.vue'),
    },
    {
        path: '/elctronic',
        name: 'elctronic',
        component: () => import('../views/categories/elctronic.vue'),
    },
    {
        path: '/kitchen',
        name: 'kitchen',
        component: () => import('../views/categories/kitchen.vue'),
    },
    {
        path: '/education',
        name: 'education',
        component: () => import('../views/categories/education.vue'),
    },
    {
        path: '/furniture',
        name: 'furniture',
        component: () => import('../views/categories/furniture.vue'),
    },
    {
        path: '/child',
        name: 'child',
        component: () => import('../views/categories/child.vue'),
    },
    
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
