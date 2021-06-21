<template>
  <sheet :character="character"/>

</template>

<script lang="ts">
import Sheet from 'src/components/sheet.vue';

export default {
  name: 'Immogen',
  meta: {
    title: 'Immogen',
  },
  components: {
    Sheet,
  },
  data() {
    return {
      character: this.$store.state.character.immogen,
    };
  },

};
</script>
