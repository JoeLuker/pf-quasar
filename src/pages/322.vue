<template>
  <div id="page">

    <div id="stat-block">

      <div id="introduction">

        <div>
          <div id="name" class="capitalize" v-text="character.introduction.name"></div>
          <div id="cr" v-text="introduction.cr()"></div>
        </div>

        <div id="xp" v-text="introduction.xp()"></div>

        <div>
          <span id="race" class="capitalize" v-text="character.introduction.race"/>
          <span id="class" class="capitalize">
            {{ formatList(character.introduction.class, ['name', 'level']) }}
          </span>
        </div>

        <div>
          <span id="alignment" v-text="character.introduction.alignment"/>
          <span id="size" class="capitalize">
            {{ character.introduction.size }}
          </span>
          <span id="type">
           {{ character.introduction.type }}
          </span>
          <span id="subtype">
            ({{ formatList(character.introduction.subtype) }})
          </span>

        </div>

        <div>
          <b>Init </b><span id="initiative" v-text="formatBonus(introduction.initiative())"></span>
          <b> Senses </b><span id="senses" v-text="formatList(character.introduction.senses)"></span>
        </div>

        <div id="aura" v-text="character.introduction.aura"></div>

      </div>

      <div v-show="character.defense" id="defense">
        <hr>
        <span>DEFENSE</span>
        <hr>

        <div id="ac">
          <b>AC</b> {{ defense.ac() }}
        </div>
        <div id="hp">
          <b>hp </b> <span>{{ defense.currHP() }}/{{ defense.maxHP() }}</span>
        </div>
        <div id="saving throws">
          <b>Fort </b> <span id="fortitude" v-text="defense.savingThrows().fortitude()"/>
          <b>, Ref </b> <span id="reflex" v-text="defense.savingThrows().reflex()"/>
          <b>, Will </b> <span id="will" v-text="defense.savingThrows().will()"/>
        </div>
        <div>

          <div id="defensive abilities" v-text="character.defense.defensiveAbilities"></div>
          <div id="dr" v-text="character.defense.dr"></div>
          <div id="immune" v-text="character.defense.immune"></div>
          <div id="resist" v-text="character.defense.resist"></div>
          <div id="sr" v-text="character.defense.sr"></div>

        </div>
        <div id="weaknesses" v-text="character.defense.weaknesses"></div>

      </div>

      <div v-show="character.offense" id="offense">
        <hr>
        <span>OFFENSE</span>
        <hr>
        <div id="speed">
          <b>Spd</b> {{ character.offense.speed }} <span>ft.</span>
        </div>
        <div v-show="melee" id="melee">
          <b>Melee</b> {{ melee }}
        </div>
        <div id="ranged" v-text="ranged"></div>
        <div>
          <b>Space </b><span id="space"> {{ space }} ft.; </span>
          <b>Reach </b><span id="reach"> {{ reach }} ft.; </span>
        </div>
        <b>Special Attacks </b>
        <span v-for="(attack, index) in character.offense.specialAttacks" class="special attacks">
         {{ formatSpecial(attack) }}<span
          v-if="index !== character.offense.specialAttacks.length - 1">, </span>
</span>
        <div id="spell-like abilities" v-text="character.offense.spellLikeAbilities"></div>
        <div id="spells" class="capitalize">
          <SpellList v-bind:caster="character.offense.spells" @changeSpell="changeSpell"/>
        </div>

      </div>

      <div v-show="character.tactics" id="tactics">
        <hr>
        <span>TACTICS</span>
        <hr>
        <div id="before combat">
          Before Combat: {{ character.tactics.beforeCombat }}
        </div>
        <div id="during combat">
          During Combat: {{ character.tactics.duringCombat }}
        </div>
        <div id="morale">
          Morale: {{ character.tactics.morale }}
        </div>
      </div>

      <div v-show="character.statistics" id="statistics">
        <hr>
        <span>STATISTICS</span>
        <hr>
        <div id="ability scores">
          <span v-for="(score, key, index) in abilityScores" v-bind:key="index">
            <b class="capitalize"> {{ key.substr(0, 3) }}</b> {{ score }}
            ({{
              formatBonus(
                abilityMods[key])
            }})
            <span v-if="index !== 5">, </span>
          </span>
        </div>
        <div>
          <b>Base Atk </b><span id="base atk" v-text="formatBonus(baseAtk)"/>;
          <b>CMB </b><span id="cmb" v-text="formatBonus(cmb)"/>;
          <b>CMD </b><span id="cmd" v-text="formatBonus(cmd)"/>;
        </div>
        <div id="feats" v-text="character.statistics.feats"></div>
        <b @click="skillToggle = !skillToggle"> Skills </b>
        <span v-if="skillToggle">
          <span class="capitalize">
            {{ formatSkills(skills) }}
        </span>
        </span>
        <span v-if="!skillToggle">...</span>
        <div id="languages" v-text="character.statistics.languages"></div>
        <div id="sq" v-text="character.statistics.specialQualities"></div>

      </div>

      <div v-show="character.specialAbilities" id="special abilities">
        <hr>
        <span>SPECIAL ABILITIES</span>
        <hr>
      </div>

      <div v-show="character.gear" id="gear">
        <hr>
        <span>GEAR</span>
        <hr>
      </div>

      <div v-show="character.ecology" id="ecology">
        <hr>
        <span>ECOLOGY</span>
        <hr>
      </div>

      <div v-show="character.miscellaneous" id="miscellaneous">
        <hr>
        <span>MISCELLANEOUS</span>
        <hr>
      </div>

    </div>

<!--    <div id="info">-->

<!--      <div id="buttons">-->
<!--        <div v-for="(bonus, key) in toggle" v-bind:key="key" class="toggle"-->
<!--             v-bind:style="{ 'background-color' : bgColor(bonus.action)}">-->
<!--          <q-toggle-->
<!--            v-model="bonus.active"-->
<!--            :label="key"-->
<!--            left-label-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->

<!--      <div v-if="abilityName" class="info">-->

<!--        <Info-->
<!--          v-bind:table="'ability'"-->
<!--          v-bind:name="this.abilityName"-->
<!--          @closeInfo="changeInfo"-->
<!--        />-->

<!--      </div>-->

<!--      <div v-if="spellName" class="spellDesc">-->

<!--        <FullText-->
<!--          v-bind:table="'spell'"-->
<!--          v-bind:name="this.spellName"-->
<!--          @closeSpell="closeInfo"-->
<!--        />-->

<!--      </div>-->

<!--    </div>-->

  </div>

</template>

<script lang="ts">
import SpellList from 'src/components/SpellList.vue';
import FullText from 'src/components/FullText';
import Info from 'src/components/Info';
import { PlayerCharacter } from 'src/store/PlayerCharacterModule';

export default {
  name: '322',
  meta: {
    title: '322',
  },
  components: {
    SpellList,
    FullText,
    Info,
  },
  data() {
    return {
      character: PlayerCharacter['322'],
      toggle: {
        Heroism: {
          type: 'Morale',
          bonus: 2,
          active: true,
          rollType: ['Attack Rolls', 'Saving Throws', 'Skill Checks'],
          action: 2,
        },
        'Mage Armor': {
          type: 'armor',
          bonus: 4,
          active: true,
          action: 2,
        },
        'Power Attack': {
          active: true,
          action: 0,
        },
        'Two-Handing': {
          active: true,
          action: 0,
        },
        Haste: {
          type: 'Dodge',
          bonus: 1,
          active: false,
          rollType: ['Attack Rolls', 'Reflex Saving Throws', 'Armor Class'],
          action: 2,
        },
        'Deadly Aim': {
          active: true,
          action: 0,
        },
        Holy: {
          active: false,
          action: 0,
        },
        'Weapon of Awe': {
          active: false,
          action: 2,
        },
        'Good Hope': {
          active: false,
          bonus: 2,
          action: 2,
        },

      },
      spellName: '',
      skillToggle: true,
      featToggle: false,
      acToggle: false,
      specialAbilitiesToggle: true,
      ExtraordinaryToggle: true,
      SupernaturalToggle: true,
      specialQualitiesToggle: false,
      defensiveAbilitiesToggle: true,
      abilityName: '',
    };
  },
  computed: {

    // INTRODUCTION
    introduction() {
      const abilityMods = { ...this.abilityMods };
      const introData = { ...PlayerCharacter['322'].introduction };

      return {
        cr() {
          return '';
        },
        xp() {
          return '';
        },
        level() {
          return introData.class.reduce((accumulator, cur) => accumulator + cur.level, 0);
        },
        initiative() {
          return abilityMods.dexterity;
        }
        ,
      };
    },
    // DEFENSE
    defense() {
      const abilityMods = { ...this.abilityMods };
      const charLevel = this.introduction.level();

      return {

        ac() {
          return 10 + abilityMods.dexterity + abilityMods.charisma + 4 + 3;
        },
        maxHP() {
          let hitPoints = 0;

          const CharClasses = PlayerCharacter['322'].introduction.class;

          CharClasses.forEach((charClass) => {
            if (charClass.first) {
              hitPoints += charClass.hitDie;
              hitPoints += (charClass.level - 1) * Math.ceil((charClass.hitDie + 1) / 2);
            } else {
              hitPoints += charClass.level * Math.ceil((charClass.hitDie + 1) / 2);
            }
            if (typeof charClass.favored !== 'undefined') {
              if (typeof charClass.favored.hp !== 'undefined') {
                hitPoints += charClass.favored.hp;
              }
            }
          });

          hitPoints += charLevel * abilityMods.constitution;

          return hitPoints;
        },
        currHP() {
          return this.maxHP();
        },
        savingThrows() {
          return {

            fortitude() {
              return abilityMods.constitution + 6;
            },
            reflex() {
              return abilityMods.dexterity + 6;
            },
            will() {
              return abilityMods.wisdom + 11;
            },
          };
        },
      };
    },
    // OFFENSE

    speed() {
      return '20';
    },
    melee() {
      const option = {
        name: 'Dagger',
        attack: this.abilityMods.strength + this.baseAtk
          + PlayerCharacter['322'].introduction.sizeMod,
        dieCount: 1,
        dieSize: 4,
        damage: this.abilityMods.strength,
      };

      return `${option.name} ${this.formatBonus(option.attack)} \
      (${option.dieCount}d${option.dieSize}${this.formatBonus(option.damage)})`;
    },
    ranged() {
      return '';
    },
    space() {
      return '5';
    },
    reach() {
      return '5';
    },
    specialAttacks() {
      return {
        maxReservoir: Math.floor(PlayerCharacter['322'].introduction.class[0].level / 2) + 3,
        currResevoir: Math.floor(PlayerCharacter['322'].introduction.class[0].level / 2) + 3,
      };
    },

    // TACTICS
    tactics() {
      return {};
    },

    // STATISTICS

    abilityScores() {
      const tempAbilityScores: Record<string, number> = { ...PlayerCharacter['322'].statistics.abilityScore };

      const husk: Record<string, number> = {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      };

      const keys = Object.keys(tempAbilityScores);

      keys.forEach((score) => {
        const subKeys = Object.keys(tempAbilityScores[score]);
        subKeys.forEach((subScore) => {
          husk[score] += tempAbilityScores[score][subScore];
        });
      });

      return husk;
    },
    abilityMods(): Record<string, unknown> {
      const filledArray: Record<string, number> = { ...this.abilityScores };

      const keys = Object.keys(this.abilityScores);

      keys.forEach((score) => {
        filledArray[score] = Math.floor((filledArray[score] - 10) / 2);
      });

      return filledArray;
    },
    baseAtk() {
      let bab = 0;

      const CharClasses = PlayerCharacter['322'].introduction.class;

      CharClasses.forEach((charClass) => {
        bab += Math.floor(charClass.level * charClass.bab);
      });

      return bab;
    },
    cmb() {
      return this.abilityMods.strength + this.baseAtk - PlayerCharacter['322'].introduction.sizeMod;
    },
    cmd() {
      return 10 + this.abilityMods.dexterity
        + this.abilityMods.strength + this.baseAtk
        - PlayerCharacter['322'].introduction.sizeMod;
    },
    skills() {
      const skillPoints = { ...PlayerCharacter['322'].statistics.skills };

      const skills = {
        stealth: 0,
        disguise: 0,
        heal: 0,
        knowledge: {
          arcana: 0,
          planes: 0,
          religion: 0,
        },
        perception: 0,
        spellcraft: 0,
      };

      const classSkills = [...PlayerCharacter['322'].introduction.class[0].classSkills];

      const knowledge = { ...PlayerCharacter['322'].statistics.skills.knowledge };

      const knowledgeKeys = Object.keys(knowledge);

      const keys = Object.keys(skills);

      keys.forEach((skillKey) => {
        if (skillKey === 'knowledge') {
          knowledgeKeys.forEach((knowledgeSkillKey) => {
            skills.knowledge[knowledgeSkillKey] += skillPoints.knowledge[knowledgeSkillKey].points;
            skills.knowledge[knowledgeSkillKey] += this.abilityMods[skillPoints.knowledge[knowledgeSkillKey].ability];
          });
        } else {
          skills[skillKey] += skillPoints[skillKey].points;
          skills[skillKey] += this.abilityMods[skillPoints[skillKey].ability];
        }
        classSkills.forEach((classSkill) => {
          if (classSkill === skillKey && skillPoints[skillKey].points >= 1) skills[skillKey] += 3;
          if (classSkill === skillKey && classSkill === 'knowledge') {
            knowledgeKeys.forEach((knowledgeSkillKey) => {
              if (skillPoints.knowledge[knowledgeSkillKey].points >= 1) {
                skills.knowledge[knowledgeSkillKey] += 3;
              }
            });
          }
        });
      });

      return skills;
    },

    // SPECIAL ABILITIES
    specialAbilities() {
      return {};
    },

    // GEAR
    gear() {
      return {};
    },

    // ECOLOGY
    ecology() {
      return {};
    },

    // MISCELLANEOUS
    miscellaneous() {
      return {};
    },

    // statBonus() {
    //   return {
    //
    //     foo() {
    //       return '';
    //     },
    //
    //   };
    // },
    // rollBonus() {
    //   return {
    //
    //     foo() {
    //       return '';
    //     },
    //
    //   };
    // },
    // bonusModifier() {
    //   return {
    //
    //     foo() {
    //       return '';
    //     },
    //
    //   };
    // },

  },
  methods: {
    formatBonus(bonus) {
      let text = '';
      if (bonus < 0) {
        text = bonus;
      } else {
        text = `+${bonus}`;
      }
      return text;
    },
    formatList(myObj, myKeys) {
      let list = '';

      let keys: Array;

      if (arguments.length === 2) {
        keys = myKeys;
      } else {
        keys = Object.keys(myObj);
      }

      if (Array.isArray(myObj)) {
        const arrSize = myObj.length;
        for (let index = 0; index < arrSize; index += 1) {
          if (typeof myObj[index] !== 'undefined') {
            if (typeof myObj[index] === 'object' && myObj[index] !== null) {
              list += this.formatList(myObj[index], keys);

              if (index !== arrSize - 1) {
                list += ', ';
              }
            } else {
              list += myObj[index];

              if (index !== arrSize - 1) {
                list += ' ';
              }
            }
          }
        }
      } else {
        const size: Array = keys.length;

        for (let index = 0; index < size; index += 1) {
          if (keys[index] !== 'undefined') {
            if (typeof myObj[keys[index]] === 'object' && myObj[keys[index]][1] !== null) {
              list += this.formatList(myObj[keys[index]]);

              if (index !== size - 1) list += ' ';
            } else {
              list += myObj[keys[index]];
            }
            if (index !== size - 1) list += ' ';
          } else {
            list += 'undefined?';
          }
        }
      }
      return list;
    },
    formatSpecial(myObj, myKeys) {
      let list = '';

      let keys: Array;

      if (arguments.length === 2) {
        keys = myKeys;
      } else {
        keys = Object.keys(myObj);
      }

      let i = 0;

      if (Array.isArray(myObj)) {
        const arrSize = keys.length;

        for (let index = 0; index < arrSize; index += 1) {
          if (typeof myObj[index] !== 'undefined') {
            if (typeof myObj[index] === 'object' && myObj[index] !== null) {
              list += this.formatSpecial(myObj[index], keys);
              if (index !== arrSize - 1) {
                list += ', ';
              }
            } else {
              list += myObj[index];

              if (index !== arrSize - 1) {
                list += ', ';
              }
            }
          }
        }
      } else {
        const size: Array = keys.length;

        for (let index = 0; index < size; index += 1) {
          if (i !== 0) {
            list += ' (';
          }
          i = 1;

          if (keys[index] !== 'undefined') {
            if (typeof myObj[keys[index]] === 'object' && myObj[keys[index]][1] !== null) {
              list += this.formatSpecial(myObj[keys[index]]);
              list += ')';

              if (index !== size - 1) list += ', ';
            } else {
              list += myObj[keys[index]];
            }
            if (index === size - 1) {
              // list += ')';
            }

            if (index !== size - 1) list += '';
          } else {
            list += 'undefined?';
          }
        }
      }
      return list;
    },
    formatSkills(myObj) {
      let list = '';

      const keys = Object.keys(myObj);

      const arrSize = keys.length;

      for (let index = 0; index < arrSize; index += 1) {
        if (keys[index] === 'knowledge') {
          list += `${keys[index]} (${this.formatSkills(myObj[keys[index]])})`;
        } else {
          list += `${keys[index]} `;
          list += this.formatBonus(myObj[keys[index]]);
        }
        if (index !== arrSize - 1) list += ', ';
      }

      return list;
    },

    closeInfo() {
      this.spellName = null;
    },

    changeSpell(value) {
      this.spellName = value;
    },
    changeInfo(value) {
      this.abilityName = value;
    },
    bgColor(action) {
      let color;

      if (action === 0) {
        color = 'rgba(0,0,0,.25)';
      }
      if (action === 1) {
        color = 'rgba(255,0,0,.25)';
      }
      if (action === 2) {
        color = 'rgba(0,0,255,.25)';
      }

      return color;
    },

  },
  created() {
    // PlayerCharacter['322'].offense.specialAttacks[0].points = [`${this.specialAttacks.currResevoir}/${this.specialAttacks.maxReservoir}`];
  },
};
</script>

<style scoped lang="scss">

#page {
  display: flex;
  flex-direction: row;
  text-shadow: 2px 2px 4px #000000;
  color: white;
  text-align: left;
  align-items: baseline;
  padding: 1vmin;
  background: rgb(54, 54, 54);
  background-image: url("../assets/322.png");
  background-repeat: no-repeat;

  background-size: 100vmax;
  background-position: 50% 30%;
  background-attachment: fixed;
  justify-content: space-between;

}

#name {
  font-size: 5vmin;
}

hr {
  width: 100%
}

p {
  margin: .5vmin;
}

.capitalize {
  text-transform: capitalize;
}

#stat-block {

  padding: 1vmin;

  display: flex;
  flex-direction: column;
  min-width: 50vw;
  background: rgba(0, 0, 0, 0.5);

}

#info {

  display: flex;
  flex-direction: column;
  min-width: 30vw;

}

#buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.toggle {

  display: flex;
  background-color: rgba(0, 0, 0, .25);

  margin: 1vmin;
  padding: 1vmin;
  align-items: center;

}

@media only screen and (max-width: 1100px) {
  /* For mobile phones: */
  [id*="page"] {
    flex-wrap: wrap;
  }

  [id*="sheet"] {
    width: 100%;
  }

  [id*="info"] {
    width: 100%;
  }
}

span {
  width: clamp(16px, 100%, 50vmin);
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
