<template>
  <sheet :character="character"/>

</template>

<script lang="ts">
import Sheet from 'src/components/BetaSheet.vue';

export default {
  name: 'Penelope',
  meta: {
    title: 'Penelope',
  },
  components: {
    Sheet,
  },
  data() {
    return {
      character: this.$store.state.character.penelope,
    };
  },

};
</script>
