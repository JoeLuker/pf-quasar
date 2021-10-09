<template>

  <div v-show="caster.spells">

    <b v-on:click="toggleKey = !toggleKey">{{ caster.name }} Spells
      <span v-if="caster.casting === 'spontaneous' ">Known</span>
      <span v-if="caster.casting === 'prepared' ">Prepared</span>
      (CL {{ caster.casterLevel }})<span v-show="!toggleKey"> ...</span></b>

    <div class="spells" v-for="(spellList, level) in caster.spells"
         v-bind:key="level">

      <div v-show="toggleKey">
        <b>
          {{ level }}
          <span v-if="level !== 'Cantrips' && level !== 'Orisons'"> ({{ spellList.slots }}/day)</span>
        </b>
        <span>—</span>
        <i v-for="(spell, index) in spellList.prepared" v-bind:key="index">
          <span v-bind:style="{ color: fuck}"
                v-on:click="$emit('changeSpell', spell)">{{ spell }}</span>

          <span v-if="index !== spellList.prepared.length - 1">, </span>

        </i>

        <span v-if="typeof caster.patronSpells !== 'undefined'">
        <i class="patron" v-show="caster.patronSpells[level]"> :
          <span v-on:click="$emit('changeSpell', caster.patronSpells[level])">
            {{ caster.patronSpells[level] }}
          </span>
        </i>
        </span>
        <span v-if="typeof caster.mysterySpells !== 'undefined'">
        <i v-for="(mystery, index) in caster.mysterySpells" class="mystery"
           v-show="mystery[level]"
           :key="index"> :
          <span v-on:click="$emit('changeSpell', mystery[level])">
            {{ mystery[level] }}
          </span>
        </i>
        </span>
      </div>

    </div>

  </div>

</template>

<script>

export default {
  name: 'SpellLevel',

  data() {
    return {
      toggleKey: true,
      fuck: 'white',
    };
  },
  props: {
    caster: Object,
  },
  methods: {

    async spellColor(value) {
      await this.$postgrest.$ready;

      const resp = await this.$postgrest.spell.get(
        {
          select: ['*'],
          and: {
            'name.ilike': value,
          },
        }, { limit: 1 },
      );

      const spell = await resp.json();

      if (spell[0] !== undefined && spell[0].school === 'enchantment') {
        return 'purple';
      }

      return 'green';
    },

  },

};
</script>

<style scoped>

.spells {
  text-indent: 1rem;
  margin: .5vmin;
}

.patron {
  color: #31CCEC;
}

.mystery {
  color: #cdaeff;
}

</style>
