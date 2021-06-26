<template>
  <div>
    {{ this.character }}
  </div>

</template>

<script lang="ts">
import { NewCharacter } from 'src/store/newcharacter';

export default {
  name: 'Penelope',
  meta: {
    title: 'Penelope',
  },

  data() {
    return {

      character: NewCharacter.level,

    };
  },

};
</script>
