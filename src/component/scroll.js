import Scroll from './scroll.vue';
import StepScroll from './step-scroll.vue'
let MyScroll={}
MyScroll.install = function (Vue) {
    Vue.component(Scroll.name, Scroll);
    Vue.component(StepScroll.name, StepScroll);
};
export default MyScroll
export { Scroll ,StepScroll}