import {
  getModule, Module, VuexModule,
} from 'vuex-module-decorators';
import { storeInstance } from './index';

@Module({
  dynamic: true,
  store: storeInstance,
  namespaced: true,
  name: 'PlayerCharacterModule',
})
class PlayerCharacterModule extends VuexModule {
  ulurin = {
    introduction: {
      name: 'ulurin',
      race: 'gnome',
      class: [{
        archetype: ['exploiter', 'pact'],
        name: 'wizard',
        level: 9,
        hitDie: 6,
        bab: 1 / 2,
        first: true,
        skillRanks: 2,
        classSkills: ['appraise', 'craft', 'fly', 'knowledge', 'lingustics', 'profession', 'spellcraft'],
        favored: {
          hp: 9,
          skill: 0,
          race: {
            gnome: 0,
          },
        },
      }],
      alignment: 'NG',
      size: 'small',
      sizeMod: 1,
      type: 'humanoid',
      subtype: ['gnome'],
      senses: ['Low-light vision'],
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
            'Quick Study',
            'Dimensional Slide',
            'Counterspell',
          ],
        },
      ],
      spellLikeAbilities: '',
      spells: {
        class: 'wizard',
        casterLevel: 9,
        casting: 'prepared',
        spellList: {
          '5th': [
            'Force Wall',
            'Overland Flight',
            'Life Bubble',
          ],
          '4th': [
            'Greater Invisibility',
            'Dimension Door',
            'Freedom of Movement',
            'Emergency Force Sphere',
          ],
          '3rd': [
            'Dispel Magic',
            'Dispel Magic',
            'Haste',
            'Haste',
            'Heroism',
          ],
          '2nd': [
            'False Life',
            'Blur',
            'Mirror Image',
            'Invisibility',
            'Invisibility',
          ],
          '1st': [
            'Protection from Evil',
            'Enlarge Person',
            'Reduce Person',
            'Grease',
            'Shield',
            'Shield',
            'Mage Armor',
          ],
          Cantrips: [
            'Mending',
            'Detect Magic',
            'Mage Hand',
            'Light',
          ],
        },
        patronSpells: {
          name: 'Healing',
          '1st': 'Remove Fear',
          '2nd': 'Lesser Restoration',
          '3rd': 'Remove Disease',
          '4th': 'Restoration',
        },
      },
    },
    tactics: {
      beforeCombat: 'Ulurin is assumed to have Mage Armor on at all times',
      duringCombat: 'Ulurin spams his Counterspell exploit as much as fuckin\' possible',
      morale: 'Ulurin has died once for his comrades. '
        + 'Despite his general demeanor he would not hesistate to do it again.',
    },
    statistics: {
      abilityScore: {
        strength: {
          pointBuy: 7,
          racial: -2,
        },
        dexterity: {
          pointBuy: 10,
        },
        constitution: {
          pointBuy: 12,
          racial: 2,
          enhancement: 2,
        },
        intelligence: {
          pointBuy: 18,
          racial: 2,
          enhancement: 6,
          levelUp: 2,
        },
        wisdom: {
          pointBuy: 10,
        },
        charisma: {
          pointBuy: 14,
        },
      },
      feats: '',
      skills: {
        diplomacy: {
          points: 9,
          ability: 'charisma',
        },
        fly: {
          points: 9,
          ability: 'dexterity',
        },
        'escape artist': {
          points: 9,
          ability: 'dexterity',
        },
        heal: {
          points: 9,
          ability: 'wisdom',
        },
        knowledge: {
          arcana: {
            points: 9,
            ability: 'intelligence',
          },
          dungeoneering: {
            points: 1,
            ability: 'intelligence',
          },
          engineering: {
            points: 1,
            ability: 'intelligence',
          },
          geography: {
            points: 1,
            ability: 'intelligence',
          },
          history: {
            points: 1,
            ability: 'intelligence',
          },
          local: {
            points: 1,
            ability: 'intelligence',
          },
          nature: {
            points: 1,
            ability: 'intelligence',
          },
          nobility: {
            points: 1,
            ability: 'intelligence',
          },
          planes: {
            points: 9,
            ability: 'intelligence',
          },
          religion: {
            points: 9,
            ability: 'intelligence',
          },
        },
        linguistics: {
          points: 9,
          ability: 'intelligence',
        },
        perception: {
          points: 2,
          ability: 'wisdom',
        },
        spellcraft: {
          points: 9,
          ability: 'intelligence',
        },
        'use magic device': {
          points: 9,
          ability: 'charisma',
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
  };

  '322' = {
    introduction: {
      name: '322',
      race: 'drow',
      class: [{
        name: 'oracle',
        level: 9,
        hitDie: 8,
        bab: 2 / 3,
        first: true,
        skillRanks: 4,
        classSkills: ['craft', 'diplomacy', 'heal', 'history', 'planes', 'religion', 'profession', 'sense motive', 'spellcraft'],
        favored: {
          hp: 9,
          skill: 0,
          race: {
            drow: 0,
          },
        },
      }],
      alignment: 'CN',
      size: 'medium',
      sizeMod: 0,
      type: 'humanoid',
      subtype: ['elf'],
      senses: ['Dark vision'],
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
      speed: 35,
      specialAttacks: [

        { name: 'Cloak of Darkness' },
        { name: 'Gift of Madness' },
        { name: 'Interstellar Void' },
        { name: 'Oracle Curse' },
        { name: 'Wings of Darkness' },

      ],
      spellLikeAbilities: '',
      spells: {
        class: 'oracle',
        casterLevel: 9,
        casting: 'spontanious',
        spellList: {
          '4th (5/day)': [
            'Aura of Doom',
            'Mark of the Reptile God',
          ],
          '3rd (8/day)': [
            'Inflict Serious Wounds',
            'Cure Serious Wounds',
            'Dispel Magic',
            'Blindness/Deafness',
            'Tongues',
            'Bestow Curse',
          ],
          '2nd (8/day)': [
            'Admonishing Ray',
            'Cure Mod Wounds',
            'Disfiguring Touch',
            'Dust of Twilight',
            'Ghoul Touch',
            'Hold Person',
            'Create Pit',
          ],
          '1st (8/day)': [
            'Burning Disarm',
            'Cure Light Wounds',
            'Death Watch',
            'Murderous Command',
            'Ray of Sickening',
            'Shield of Faith',
            'Bane',
          ],
          Orisons: [
            'Bleed',
            'Detect Magic',
            'Read Magic',
            'Light',
            'Guidance',
            'Stabilize',
          ],
        },
        patronSpells: {},
        //   name: 'Healing',
        //   '1st': 'Remove Fear',
        //   '2nd': 'Lesser Restoration',
        //   '3rd': 'Remove Disease',
        //   '4th': 'Restoration',
        // },
      },
    },
    tactics: '',
    //   beforeCombat: 'Ulurin is assumed to have Mage Armor on at all times',
    //   duringCombat: 'Ulurin spams his Counterspell exploit as much as fuckin\' possible',
    //   morale: 'Ulurin has died once for his comrades. '
    //     + 'Despite his general demeanor he would not hesistate to do it again.',
    // },
    statistics: {
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
      feats: '',
      skills: {
        stealth: {
          points: 9,
          ability: 'dexterity',
        },
        disguise: {
          points: 9,
          ability: 'charisma',
        },
        heal: {
          points: 9,
          ability: 'wisdom',
        },
        knowledge: {
          arcana: {
            points: 9,
            ability: 'intelligence',
          },
          planes: {
            points: 9,
            ability: 'intelligence',
          },
          religion: {
            points: 9,
            ability: 'intelligence',
          },
        },
        perception: {
          points: 2,
          ability: 'wisdom',
        },
        spellcraft: {
          points: 9,
          ability: 'intelligence',
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
  };

  gub = {
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
  };

  witch = {
    introduction: {
      name: 'Sareah',
      race: 'half-elf',
      trait: [
        'oblivious',
        'less effort',
        'auspicious tattoo',
        'advantageous distraction',
        'reactionary',
        'fate\'s favored',
      ],
      class: [{
        archetype: ['ley-line gaurdian'],
        name: 'witch',
        level: 4,
        hitDie: 6,
        bab: 1 / 2,
        first: true,
        skillRanks: 2,
        classSkills: ['craft', 'bluff', 'diplomacy', 'fly', 'heal', 'arcana', 'history', 'nature', 'history', 'planes', 'profession', 'spellcraft', 'use magic device'],
        favored: {
          hp: 3,
          skill: 0,
          race: {
            'half-elf': 1,
          },
        },
        saves: {
          fort: false,
          ref: false,
          will: true,
        },
      }],
      alignment: 'N',
      size: 'medium',
      sizeMod: 0,
      type: 'humanoid',
      subtype: ['elf', 'human'],
      senses: ['low-light vision'],
      aura: '',
    },
    defense: {
      defensiveAbilities: '',
      dr: '',
      immune: ['sleep'],
      resist: '',
      sr: '',
      weaknesses: '',
    },
    offense: {
      speed: 30,
      specialAttacks: [
        {
          name: 'Witch Hexes',
          hexes: [
            'cackle',
            'misfortune (DC 18)',
          ],
        },
      ],
      spellLikeAbilities: '',
      spells: {
        class: 'witch',
        casterLevel: 4,
        casting: 'spontanious',
        spells: {
          '2nd': {
            slots: 5,
            prepared: [
              'lipstitch',
            ],
          },
          '1st': {
            slots: 8,
            prepared: [
              '???',
              '???',
              'mage armor',
              'ear-piercing scream',
            ],
          },
          Cantrips: {
            prepared: [
              'mage hand',
              '???',
              '???',
              '???',
              '???',
              '???',
            ],
          },

        },
        patronSpells: {
          name: '???',
          '1st': '???',
          '2nd': '???',
        },

      },
    },
    tactics: '',
    statistics: {
      abilityScore: {
        strength: {
          pointBuy: 6,
        },
        dexterity: {
          pointBuy: 15,
        },
        constitution: {
          pointBuy: 14,
        },
        intelligence: {
          pointBuy: 17,
          racial: 2,
          enhancement: 2,
          levelUp: 1,
        },
        wisdom: {
          pointBuy: 13,
        },
        charisma: {
          pointBuy: 13,
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
          modifier: [],
        },
        appraise: {
          points: 0,
          ability: 'intelligence',
          modifier: [],
        },
        bluff: {
          points: 4,
          ability: 'intelligence',
          modifier: [{
            name: 'trait',
            bonus: 1,
          }, {
            name: 'skill focus',
            bonus: 3,
          }, {
            name: 'mwk tools',
            bonus: 2,
          },
          ],
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
          points: 4,
          ability: 'intelligence',
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
          points: 4,
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
          points: 1,
          ability: 'strength',
          modifier: [],
        },
        'use magic device': {
          points: 0,
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
  };
}

export const PlayerCharacter = getModule(PlayerCharacterModule);
