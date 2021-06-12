<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="isLeftDrawerOpen = !isLeftDrawerOpen"
        />

        <q-toolbar-title>
          Pathfinder!
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="isLeftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
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

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import { LayoutStore } from 'src/store/LayoutStoreModule';

const linksData = [
  {
    title: 'Search',
    caption: 'Knowledge awaits!',
    icon: 'search',
    link: '/#/Search',
  },
  {
    title: 'Immogen',
    caption: 'Let\'s add +24 to this roll...',
    icon: 'hourglass_empty',
    link: '/#/Immogen',
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
];

import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const essentialLinks = ref(linksData);

    return { essentialLinks };
  },
  computed: {
    isLeftDrawerOpen: {
      // getter
      get() {
        return LayoutStore.isLeftDrawerOpen;
      },
      // setter
      set(value) {
        LayoutStore.setLeftDrawer(value);
      },
    },
  },
});
</script>
