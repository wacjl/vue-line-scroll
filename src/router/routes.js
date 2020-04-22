export default [
    { path: '/', component: () => import('@/view/index.vue') },
    { path: '/test', component: () => import('@/view/test.vue') },
    { path: '/bar', component: () => import('@/view/bar.vue') }

]