<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="left = !left"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Pathfinder!
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>

      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/Search" label="Search" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" side="left" behavior="mobile" elevated>

      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container >
      <q-page>
      <router-view style="min-height: inherit;"  />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'Search',
    caption: 'Knowledge awaits!',
    icon: 'search',
    link: '/#/Search',
  },
  {
    title: 'Gub',
    caption: 'ooh shiny!',
    icon: 'auto_fix_high',
    link: '/#/Gub',
  },
  {
    title: 'Immogen',
    caption: 'Let\'s add +24 to this roll...',
    icon: 'hourglass_empty',
    link: '/#/Immogen',
  },
  {
    title: 'Immogen (old sheet)',
    caption: 'Let\'s add +24 to this roll...',
    icon: 'hourglass_empty',
    link: '/#/OldImmogen',
  },
  {
    title: 'Charlotte',
    caption: 'I\'m trying to be a white mage here',
    icon: 'flare',
    link: '/#/Charlotte',
  },
  {
    title: 'Ulurin',
    caption: '*incoherent blubbering*',
    icon: 'auto_fix_off',
    link: '/#/Ulurin',
  },
  {
    title: '322',
    caption: 'Shadows n\' shit',
    icon: 'dark_mode',
    link: '/#/322',
  },
  {
    title: 'Sareah',
    caption: 'uwu',
    icon: 'sentiment_very_satisfied',
    link: '/#/Sareah',
  },
  {
    title: 'Form',
    caption: 'build a character!',
    icon: 'add',
    link: '/#/Form',
  },
];

import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const essentialLinks = ref(linksData);

    return { essentialLinks };
  },
  data() {
    return {
      left: false,
    };
  },
});
</script>
