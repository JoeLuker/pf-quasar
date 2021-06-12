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
  character = {
    introduction: {
      name: 'immogen',
      race: 'human',
      class: [{
        archetype: ['exploiter', 'pact'],
        name: 'wizard',
        level: 9,
      }],
      alignment: 'NG',
      size: 'small',
      type: 'humanoid',
      subtype: ['gnome'],
      senses: '',
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
      specialAttacks: '',
      spellLikeAbilities: '',
      spells: {
        class: 'wizard',
        casterLevel: 9,
        casting: 'prepared',
        spellList: {
          '4th': [
            'Invisibility, Greater',
            'Dimension Door',
          ],
          '3rd': [
            'Haste',
            'Glibness',
            'Major Image',
            'Charm monster',
            'Confusion',
            'Good Hope',
          ],
          '2nd': [
            'Heroism',
            'Gallant Inspiration',
            'Blur',
            'Invisibility',
            'Heroic Fortune',
            'Share Memory',
            'Detect Thoughts',
            'Mirror Image',
          ],
          '1st': [
            'Shadow Trap',
            'Charm Person',
            'Fabricate Disguise',
            'Saving Finale',
            'Hideous Laughter',
            'Grease',
            'Heightened Awareness',
            'Feather Fall',
            'Timely Inspiration',
          ],
          cantrip_orison: [
            'Dancing Lights',
            'Detect Magic',
            'Prestidigitation',
            'Daze',
            'Open/Close',
            'Mage Hand',
            'Lullaby',
            'Message',
            'Mending',
          ],
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
      pointBuy: {
        strength: 7,
        dexterity: 10,
        constitution: 12,
        intelligence: 18,
        wisdom: 10,
        charisma: 14,
      },
      abilityScoreModifiers: {
        strength: -2,
        dexterity: 0,
        constitution: 2,
        intelligence: 2,
        wisdom: 0,
        charisma: 0,
      },
      feats: '',
      skills: '',
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
