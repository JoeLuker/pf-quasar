<template>
  <div class="col-3 q-mx-md">

    <div v-for="x in subArray">

      <div v-if="!Array.isArray(x) && typeof x === 'object'">

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
          :label="x"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
      </div>

    </div>
  </div>

</template>

<script>
import SubObject from 'components/SubObject';

export default {
  name: 'SubArray',
  components: {
    SubObject,
  },
  props: {
    subArray: Array,
  },
};

</script>
