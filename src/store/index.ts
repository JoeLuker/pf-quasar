import { store } from 'quasar/wrappers';
import Vuex, { Store } from 'vuex';

import character from './character';

export let storeInstance: Store<unknown>;

export default store(({ Vue }) => {
  Vue.use(Vuex);
  const store = new Store<unknown>({
    modules: {
      character,
    },
    strict: !!process.env.DEBUGGING,
  });
  storeInstance = store;
  return store;
});
