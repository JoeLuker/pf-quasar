import {
  Action, getModule, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';
import { storeInstance } from 'src/store/index';

@Module({
  dynamic: true,
  store: storeInstance,
  namespaced: true,
  name: 'NewCharacterModule',
})
class NewCharacterModule extends VuexModule {
  penelope = {

    // INTRODUCTION
    name: 'penelope',
    race: 'human',
    class: [{
      name: 'alchemist',
      archetype: 'mindchemist',
      level: 14,
      hitDie: 8,
      bab: 2 / 3,
      first: true,
      skillRanks: 4,
      classSkills: ['craft', 'diplomacy', 'heal', 'history', 'planes', 'religion', 'profession', 'sense motive', 'spellcraft'],
      favored: {
        hp: 0,
        skill: 0,
        race: {
          human: 14,
        },
      },
      saves: {
        fort: false,
        ref: false,
        will: true,
      },
    }],
    alignment: 'CN',
    size: 'medium',
    sizeMod: 0,
    type: 'humanoid',
    subtype: ['elf'],
    senses: ['Dark vision'],
    aura: '',

    // DEFENSE
    defensiveAbilities: '',
    dr: '',
    immune: '',
    resist: '',
    sr: '',
    weaknesses: [''],

    // OFFENSE
    speed: 35,
    specialAttacks: [

      { name: 'Cloak of Darkness' },
      { name: 'Gift of Madness' },
      { name: 'Interstellar Void' },
      { name: 'Oracle Curse' },
      { name: 'Wings of Darkness' },

    ],
    spellLikeAbilities: '',
    tactics: '',

    // STATISTICS
    abilityScore: {
      strength: {
        pointBuy: 14,
      },
      dexterity: {
        pointBuy: 12,
        racial: 2,
      },
      constitution: {
        pointBuy: 14,
        racial: -2,
      },
      intelligence: {
        pointBuy: 10,
        racial: 2,
      },
      wisdom: {
        pointBuy: 10,
      },
      charisma: {
        pointBuy: 17,
        levelUp: 2,
        enhancement: 6,

      },
    },
    skills: {
      acrobatics: {
        points: 0,
        ability: 'dexterity',
        modifier: [],
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
        points: 0,
        ability: 'dexterity',
        modifier: [],
      },
      disguise: {
        points: 0,
        ability: 'charisma',
        modifier: [],
      },
      'escape artist': {
        points: 0,
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
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        dungeoneering: {
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        engineering: {
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        geography: {
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        history: {
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        local: {
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        nature: {
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        nobility: {
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        planes: {
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        religion: {
          points: 0,
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
        modifier: [],
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
        modifier: [],
      },
      'slight of hand': {
        points: 0,
        ability: 'dexterity',
        modifier: [],
      },
      spellcraft: {
        points: 0,
        ability: 'intelligence',
        modifier: [],
      },
      stealth: {
        points: 0,
        ability: 'dexterity',
        modifier: [],
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
        points: 0,
        ability: 'charisma',
        modifier: [],
      },

      feats: [''],
      languages: '',
      specialQualities: '',
    },

    // SPECIAL ABILITIES
    specialAbilities: '',

    // GEAR
    gear: '',

    // ECOLOGY
    ecology: '',

    // MISC
    miscellaneous: '',
  };

  level = this.penelope.class[0].level;
}

export const NewCharacter = getModule(NewCharacterModule);
