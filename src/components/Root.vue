<template>
  <div>

    <div v-if="!Array.isArray(subRoot) && typeof subRoot === 'object'">

      <sub-object :sub-object="subRoot"/>

    </div>
    <div v-else-if="Array.isArray(subRoot) && typeof subRoot === 'object'">
      <sub-array :sub-array="subRoot"/>

    </div>
  </div>
</template>

<script>

import SubObject from './SubObject.vue';
import SubArray from './SubArray.vue';

export default {
  name: 'Root',
  props: {
    subRoot: Object,
  },
  components: {
    SubObject,
    SubArray,
  },
};

</script>
