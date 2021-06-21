<template>
  <div class="col-3 q-mx-md">

    <div v-for="(x, xname) in subObject">

      <div v-if="!Array.isArray(x) && typeof x === 'object'">
        {{xname}}

        <sub-object :sub-object="x"/>

      </div>
      <div v-else-if="Array.isArray(x) && typeof x === 'object'">
        <sub-array :sub-array="x"/>

      </div>
      <div v-else>
        <q-input
          filled
          clearable
          v-model="name"
          :label="xname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
      </div>

    </div>
  </div>

</template>
<script>

import SubArray from 'components/SubArray';

export default {
  name: 'SubObject',
  components: {
    SubArray,
  },
  props: {
    subObject: Object,
  },
};

</script>
