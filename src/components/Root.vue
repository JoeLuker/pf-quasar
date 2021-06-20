<template>
  <div>

    <div v-if="!Array.isArray(x) && typeof x === 'object'">

      <sub-object :sub-object="x"/>

    </div>
    <div v-if="Array.isArray(x) && typeof x === 'object'">
      <sub-array :sub-array="x"/>

    </div>
  </div>
</template>

<script>

import SubObject from './SubObject.vue';
import SubArray from './SubArray.vue';

export default {
  name: 'Root',
  props: {
    subObject: Object,
    subArray: Array,
  },
  components: {
    SubObject,
    SubArray,
  },
};

</script>
