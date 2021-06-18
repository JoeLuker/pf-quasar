<template>
  <div class="q-pa-sm">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <div class="row">

        <div class="col-3 q-mx-md">

          <q-input
            filled
            clearable
            v-model="name"
            label="Your character's name *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            clearable
            v-model="name"
            label="Your character's race *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            v-for="traitNumber in traits"
            filled
            clearable
            v-model="name"
            label-slot
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"

          >
            <template v-slot:label>
              <span> Character trait #{{ traitNumber }} </span>
            </template>

            <template v-slot:after v-if="traitNumber === traits">

              <q-icon name="add" @click="traits += 1" class="cursor-pointer"/>

            </template>
          </q-input>

          <q-input
            v-for="classCount in classes"
            filled
            clearable
            v-model="name"
            label-slot
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          >
            <template v-slot:label>
              <span> Character class #{{ classCount }} </span>
            </template>

            <template v-slot:after v-if="classCount === classes">

              <q-icon name="add" @click="classes += 1" class="cursor-pointer"/>

            </template>
          </q-input>

          <q-input
            filled
            clearable
            v-model="name"
            label="Character alignment"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

        </div>

        <div class="col-3 q-mx-md">

          <q-input
            filled
            clearable
            type="number"
            v-model="name"
            label="Strength"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            clearable
            type="number"
            v-model="name"
            label="Dexterity"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            filled
            clearable
            type="number"
            v-model="name"
            label="Constitution"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            filled
            clearable
            type="number"
            v-model="name"
            label="Intelligence"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            clearable
            type="number"
            v-model="name"
            label="Wisdom"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            clearable
            type="number"
            v-model="name"
            label="Charisma"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

        </div>

        <div class="col-3 q-mx-md">
          <q-input
            v-for="featCount in feats"
            filled
            clearable
            v-model="name"
            label-slot
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"

          >
            <template v-slot:label>
              <span> Character feat #{{ featCount }} </span>
            </template>

            <template v-slot:after v-if="featCount === feats">

              <q-icon name="add" @click="feats += 1" class="cursor-pointer"/>

            </template>
          </q-input>

        </div>

      </div>

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>

  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Form',
  data() {
    return {
      name: null,
      age: null,

      traits: 2,
      classes: 1,
      feats: 1,

      accept: false,

      text: '',

      readonly: false,
      disable: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first',
        });
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
      this.traits = 2;
      this.classes = 1;
      this.feats = 1;
    },
  },
});
</script>

<style scoped lang="scss">

</style>
