import { boot } from 'quasar/wrappers';
// @ts-ignore
import VuePostgrest, { pg } from 'vue-postgrest';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files

export default boot(({ Vue }) => {
  Vue.use(VuePostgrest, {
    apiRoot: 'http://auroch.synology.me:3000',
  });
});

export { pg };
