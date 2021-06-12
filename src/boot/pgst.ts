import { boot } from 'quasar/wrappers';
// @ts-ignore
import VuePostgrest from 'vue-postgrest';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(({ Vue }) => {
  // something to do
  Vue.use(VuePostgrest, {
    apiRoot: 'http://auroch:3000',
  });
});
