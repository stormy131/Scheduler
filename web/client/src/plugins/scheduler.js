import axios from 'axios';
import store from '../store';
import catchWrapper from './catchWrapper';

export default {
  install: function (Vue) {
    Vue.prototype.$http = axios;
    Vue.prototype.$store = store;
    Vue.prototype.$catchWrapper = catchWrapper;
  },
};
