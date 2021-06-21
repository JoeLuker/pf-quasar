<template>
  <div class="q-pa-sm">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

      <div class="row">
        <div v-for="(x, xname) in gub" class="col-3 q-mx-md">
          {{xname}}
          <root :sub-root="x"/>
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

import Root from '../components/Root';

export default defineComponent({
  name: 'Form',
  components: {
    Root,
  },
  data() {
    return {
      name: null,
      age: null,

      traits: 2,
      classes: 1,
      feats: 1,

      gub: {
        introduction: {
          name: 'gub',
          race: 'monkey goblin',
          trait: [
            'oblivious',
            'less effort',
            'auspicious tattoo',
            'advantageous distraction',
            'reactionary',
            'fate\'s favored',
          ],
          class: [{
            archetype: ['brown-fur transmuter'],
            name: 'arcanist',
            level: 4,
            hitDie: 6,
            bab: 1 / 2,
            first: true,
            skillRanks: 2,
            classSkills: ['appraise', 'craft', 'fly', 'knowledge', 'lingustics', 'profession', 'spellcraft', 'use magic device'],
            favored: {
              hp: 4,
              skill: 0,
              race: {
                'monkey goblin': 0,
              },
            },
            saves: {
              fort: false,
              ref: false,
              will: true,
            },
          }],
          alignment: 'N',
          size: 'small',
          sizeMod: 1,
          type: 'humanoid',
          subtype: ['goblinoid'],
          senses: ['low-light vision'],
          aura: '',
        },
        defense: {
          defensiveAbilities: '',
          dr: '',
          immune: '',
          resist: '',
          sr: '',
          weaknesses: '',
        },
        offense: {
          speed: 20,
          specialAttacks: [
            {
              name: 'Arcane Reservoir',
              points: 0,
            },
            {
              name: 'Arcanist Exploits',
              exploits: [
                'item crafting',
                'feral shifting',
              ],
            },
          ],
          spellLikeAbilities: '',
          spells: {
            class: 'arcanist',
            casterLevel: 4,
            casting: 'prepared',
            spells: {
              '2nd': {
                slots: 3,
                prepared: [
                  'false life',
                  'eagle\'s splendor',
                ],
              },
              '1st': {
                slots: 5,
                prepared: [
                  'enlarge person',
                  'face of the devourer',
                  'mage armor',
                ],
              },
              Cantrips: {
                prepared: [
                  'read magic',
                  'detect magic',
                  'mage hand',
                  'light',
                  'acid splash',
                  'ghost sound',
                ],
              },

            },
          },
        },
        tactics: '',
        statistics: {
          abilityScore: {
            strength: {
              pointBuy: 16,
            },
            dexterity: {
              pointBuy: 17,
              racial: 4,

            },
            constitution: {
              pointBuy: 9,
              enhancement: 2,
            },
            intelligence: {
              pointBuy: 13,
              enhancement: 2,
              levelUp: 1,
            },
            wisdom: {
              pointBuy: 6,
              racial: -2,
            },
            charisma: {
              pointBuy: 11,
            },
          },
          feats: [
            'expanded preparation',
            'additional traits',
            'craft wondrous item',
          ],
          skills: {
            acrobatics: {
              points: 4,
              ability: 'dexterity',
              modifier: [{
                name: 'racial',
                bonus: 2,
              }],
            },
            appraise: {
              points: 0,
              ability: 'intelligence',
              modifier: [],
            },
            bluff: {
              points: 0,
              ability: 'charisma',
              modifier: [],
            },
            climb: {
              points: 0,
              ability: 'strength',
              modifier: [],
            },
            craft: {
              points: 0,
              ability: 'intelligence',
              modifier: [],
            },
            diplomacy: {
              points: 0,
              ability: 'charisma',
              modifier: [],
            },
            'disable device': {
              points: 4,
              ability: 'dexterity',
              modifier: [],
            },
            disguise: {
              points: 0,
              ability: 'charisma',
              modifier: [],
            },
            'escape artist': {
              points: 4,
              ability: 'dexterity',
              modifier: [],
            },
            fly: {
              points: 0,
              ability: 'dexterity',
              modifier: [],
            },
            'handle animal': {
              points: 0,
              ability: 'charisma',
              modifier: [],
            },
            heal: {
              points: 0,
              ability: 'wisdom',
              modifier: [],
            },
            intimidate: {
              points: 0,
              ability: 'charisma',
              modifier: [],
            },
            knowledge: {
              arcana: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
              dungeoneering: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
              engineering: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
              geography: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
              history: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
              local: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
              nature: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
              nobility: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
              planes: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
              religion: {
                points: 1,
                ability: 'intelligence',
                modifier: [],
              },
            },
            linguistics: {
              points: 0,
              ability: 'intelligence',
              modifier: [],
            },
            perception: {
              points: 0,
              ability: 'wisdom',
              modifier: [{
                name: 'oblivious',
                bonus: -2,
              }],
            },
            perform: {
              points: 0,
              ability: 'charisma',
              modifier: [],
            },
            profession: {
              points: 0,
              ability: 'wisdom',
              modifier: [],
            },
            ride: {
              points: 0,
              ability: 'dexterity',
              modifier: [],
            },
            'sense motive': {
              points: 0,
              ability: 'wisdom',
              modifier: [{
                name: 'oblivious',
                bonus: -2,
              }],
            },
            'slight of hand': {
              points: 4,
              ability: 'dexterity',
              modifier: [],
            },
            spellcraft: {
              points: 4,
              ability: 'intelligence',
              modifier: [],
            },
            stealth: {
              points: 4,
              ability: 'dexterity',
              modifier: [{
                name: 'racial',
                bonus: 2,
              }],
            },
            survival: {
              points: 0,
              ability: 'wisdom',
              modifier: [],
            },
            swim: {
              points: 0,
              ability: 'strength',
              modifier: [],
            },
            'use magic device': {
              points: 4,
              ability: 'charisma',
              modifier: [],
            },
          },
          languages: '',
          specialQualities: '',
        },
        specialAbilities: '',
        gear: '',
        ecology: '',
        // ecology: {
        //   environment: '',
        //   organization: '',
        //   treasure: '',
        // },
        miscellaneous: '',
      },

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
