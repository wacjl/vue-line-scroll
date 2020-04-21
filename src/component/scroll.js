import VueScroll from './scroll.vue';
VueScroll.install = function (Vue) {
    Vue.component(VueScroll.name, VueScroll);
};
export default VueScroll