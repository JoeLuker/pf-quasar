import { store } from 'quasar/wrappers';
import Vuex, { Store } from 'vuex';

// eslint-disable-next-line import/no-mutable-exports
export let storeInstance: Store<unknown>;

export default store(({ Vue }) => {
  Vue.use(Vuex);
  // eslint-disable-next-line no-shadow
  const store = new Store<unknown>({
    modules: {},
    strict: !!process.env.DEBUGGING,
  });
  storeInstance = store;
  return store;
});
