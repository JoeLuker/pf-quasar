import { store } from 'quasar/wrappers';
import Vuex, { Store } from 'vuex';

import character from './character';

export default store(({ Vue }) => {
  Vue.use(Vuex);
  // eslint-disable-next-line no-shadow
  const store = new Store<unknown>({
    modules: {
      character,
    },
    strict: process.env.DEV,
  });
  if (process.env.DEV && module.hot) {
    module.hot.accept(['./character'], () => {
      const newCharacter = require('./character').default;
      Store.hotUpdate({ modules: { character: newCharacter } });
    });
  }
  return store;
});
