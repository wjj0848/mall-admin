import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于菜单切换 false闭合 、 true 闭合
    collapsed: false,
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    changeCollapsed({
      commit,
    }) {
      commit('changeCollapsed');
    },
  },
  modules: {},
});
