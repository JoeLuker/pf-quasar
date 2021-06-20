<template>
  <div class="col-3 q-mx-md">

    <div v-for="(x, xname) in subArray">

      <div v-if="!Array.isArray(x) && typeof x === 'object'">

        <sub-array :sub-array="x"/>

      </div>
      <div v-if="Array.isArray(x) && typeof x === 'object'">
        {{xname}}
        <sub-root :sub-root="x"/>

      </div>
      <div v-else>
        <q-input
          filled
          clearable
          v-model="name"
          :label="xname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />      </div>

    </div>
  </div>

</template>

<script>

export default {
  name: 'SubArray',
  props: {
    subArray: Object,
  },
};

</script>
