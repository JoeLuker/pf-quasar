export interface ExampleStateInterface {
  gub: {
    introduction: {
      name: string,
      race: string,
      trait: [string],
      class: [{
        archetype: [string],
        name: string,
        level: number,
        hitDie: number,
        bab: number,
        first: boolean,
        skillRanks: 2,
        classSkills: [string],
        favored: {
          hp: number,
          skill: number,
          race: {
            name: string,
            count: number
          },
        },
        saves: {
          fort: boolean,
          ref: boolean,
          will: boolean,
        },
      }],
      alignment: string,
      size: string,
      sizeMod: number,
      type: string,
      subtype: [string],
      senses: ['low-light vision'],
      aura: string,
    },
    defense: {
      defensiveAbilities: string,
      dr: string,
      immune: string,
      resist: string,
      sr: string,
      weaknesses: [string],
    },
    offense: {
      speed: 20,
      specialAttacks: [
        {
          name: string,
          points: 0,
        },
        {
          name: string,
          exploits: [string],
        },
      ],
      spellLikeAbilities: string,
      spells: {
        class: string,
        casterLevel: number,
        casting: string,
        spells: {
          '2nd': {
            slots: number,
            prepared: [string],
          },
          '1st': {
            slots: number,
            prepared: [string],

          },
          Cantrips: {
            prepared: [string],
          },

        },
      },
    },
    tactics: string,
    statistics: {
      abilityScore: {
        strength: {
          pointBuy: number,
        },
        dexterity: {
          pointBuy: number,
          racial: number,

        },
        constitution: {
          pointBuy: number,
          enhancement: number,
        },
        intelligence: {
          pointBuy: number,
          enhancement: number,
          levelUp: number,
        },
        wisdom: {
          pointBuy: number,
          racial: number,
        },
        charisma: {
          pointBuy: number,
        },
      },
      feats: [string],
      skills: {
        acrobatics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        appraise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        bluff: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        climb: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        craft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        diplomacy: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'disable device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        disguise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'escape artist': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        fly: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'handle animal': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        heal: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        intimidate: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        knowledge: {
          arcana: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          dungeoneering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          engineering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          geography: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          history: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          local: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nature: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nobility: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          planes: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          religion: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
        },
        linguistics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perception: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perform: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        profession: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        ride: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'sense motive': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'slight of hand': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        spellcraft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        stealth: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        survival: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        swim: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'use magic device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
      },
      languages: string,
      specialQualities: string,
    },
    specialAbilities: string,
    gear: string,
    ecology: number,
    // ecology: {
    //   environment: string,
    //   organization: string,
    //   treasure: string,
    // },
    miscellaneous: string,
  },
  ulurin: {
    introduction: {
      name: string,
      race: string,
      trait: [string],
      class: [{
        archetype: [string],
        name: string,
        level: number,
        hitDie: number,
        bab: number,
        first: boolean,
        skillRanks: 2,
        classSkills: [string],
        favored: {
          hp: number,
          skill: number,
          race: {
            name: string,
            count: number
          },
        },
        saves: {
          fort: boolean,
          ref: boolean,
          will: boolean,
        },
      }],
      alignment: string,
      size: string,
      sizeMod: number,
      type: string,
      subtype: [string],
      senses: ['low-light vision'],
      aura: string,
    },
    defense: {
      defensiveAbilities: string,
      dr: string,
      immune: string,
      resist: string,
      sr: string,
      weaknesses: [string],
    },
    offense: {
      speed: 20,
      specialAttacks: [
        {
          name: string,
          points: 0,
        },
        {
          name: string,
          exploits: [string],
        },
      ],
      spellLikeAbilities: string,
      spells: {
        class: string,
        casterLevel: number,
        casting: string,
        spells: {
          '2nd': {
            slots: number,
            prepared: [string],
          },
          '1st': {
            slots: number,
            prepared: [string],

          },
          Cantrips: {
            prepared: [string],
          },

        },
      },
    },
    tactics: string,
    statistics: {
      abilityScore: {
        strength: {
          pointBuy: number,
        },
        dexterity: {
          pointBuy: number,
          racial: number,

        },
        constitution: {
          pointBuy: number,
          enhancement: number,
        },
        intelligence: {
          pointBuy: number,
          enhancement: number,
          levelUp: number,
        },
        wisdom: {
          pointBuy: number,
          racial: number,
        },
        charisma: {
          pointBuy: number,
        },
      },
      feats: [string],
      skills: {
        acrobatics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        appraise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        bluff: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        climb: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        craft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        diplomacy: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'disable device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        disguise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'escape artist': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        fly: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'handle animal': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        heal: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        intimidate: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        knowledge: {
          arcana: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          dungeoneering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          engineering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          geography: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          history: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          local: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nature: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nobility: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          planes: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          religion: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
        },
        linguistics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perception: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perform: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        profession: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        ride: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'sense motive': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'slight of hand': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        spellcraft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        stealth: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        survival: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        swim: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'use magic device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
      },
      languages: string,
      specialQualities: string,
    },
    specialAbilities: string,
    gear: string,
    ecology: number,
    // ecology: {
    //   environment: string,
    //   organization: string,
    //   treasure: string,
    // },
    miscellaneous: string,
  }
  sareah: {
    introduction: {
      name: string,
      race: string,
      trait: [string],
      class: [{
        archetype: [string],
        name: string,
        level: number,
        hitDie: number,
        bab: number,
        first: boolean,
        skillRanks: 2,
        classSkills: [string],
        favored: {
          hp: number,
          skill: number,
          race: {
            name: string,
            count: number
          },
        },
        saves: {
          fort: boolean,
          ref: boolean,
          will: boolean,
        },
      }],
      alignment: string,
      size: string,
      sizeMod: number,
      type: string,
      subtype: [string],
      senses: ['low-light vision'],
      aura: string,
    },
    defense: {
      defensiveAbilities: string,
      dr: string,
      immune: string,
      resist: string,
      sr: string,
      weaknesses: [string],
    },
    offense: {
      speed: 20,
      specialAttacks: [
        {
          name: string,
          points: 0,
        },
        {
          name: string,
          exploits: [string],
        },
      ],
      spellLikeAbilities: string,
      spells: {
        class: string,
        casterLevel: number,
        casting: string,
        spells: {
          '2nd': {
            slots: number,
            prepared: [string],
          },
          '1st': {
            slots: number,
            prepared: [string],

          },
          Cantrips: {
            prepared: [string],
          },

        },
      },
    },
    tactics: string,
    statistics: {
      abilityScore: {
        strength: {
          pointBuy: number,
        },
        dexterity: {
          pointBuy: number,
          racial: number,

        },
        constitution: {
          pointBuy: number,
          enhancement: number,
        },
        intelligence: {
          pointBuy: number,
          enhancement: number,
          levelUp: number,
        },
        wisdom: {
          pointBuy: number,
          racial: number,
        },
        charisma: {
          pointBuy: number,
        },
      },
      feats: [string],
      skills: {
        acrobatics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        appraise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        bluff: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        climb: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        craft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        diplomacy: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'disable device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        disguise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'escape artist': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        fly: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'handle animal': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        heal: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        intimidate: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        knowledge: {
          arcana: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          dungeoneering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          engineering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          geography: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          history: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          local: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nature: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nobility: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          planes: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          religion: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
        },
        linguistics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perception: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perform: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        profession: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        ride: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'sense motive': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'slight of hand': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        spellcraft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        stealth: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        survival: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        swim: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'use magic device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
      },
      languages: string,
      specialQualities: string,
    },
    specialAbilities: string,
    gear: string,
    ecology: number,
    // ecology: {
    //   environment: string,
    //   organization: string,
    //   treasure: string,
    // },
    miscellaneous: string,
  },
  immogen: {
    introduction: {
      name: string,
      race: string,
      trait: [string],
      class: [object],
      alignment: string,
      size: string,
      sizeMod: number,
      type: string,
      subtype: [string],
      senses: ['low-light vision'],
      aura: string,
    },
    defense: {
      defensiveAbilities: string,
      dr: string,
      immune: [string],
      resist: string,
      sr: string,
      weaknesses: [string],
    },
    offense: {
      speed: 20,
      specialAttacks: [
        {
          name: string,
          points: 0,
        },
        {
          name: string,
          exploits: [string],
        },
      ],
      spellLikeAbilities: string,
      spells: {
        class: string,
        casterLevel: number,
        casting: string,
        spells: {
          '2nd': {
            slots: number,
            prepared: [string],
          },
          '1st': {
            slots: number,
            prepared: [string],

          },
          Cantrips: {
            prepared: [string],
          },

        },
      },
    },
    tactics: string,
    statistics: {
      abilityScore: {
        strength: {
          pointBuy: number,
        },
        dexterity: {
          pointBuy: number,
          racial: number,

        },
        constitution: {
          pointBuy: number,
          enhancement: number,
        },
        intelligence: {
          pointBuy: number,
          enhancement: number,
          levelUp: number,
        },
        wisdom: {
          pointBuy: number,
          racial: number,
        },
        charisma: {
          pointBuy: number,
        },
      },
      feats: [string],
      skills: {
        acrobatics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        appraise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        bluff: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        climb: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        craft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        diplomacy: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'disable device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        disguise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'escape artist': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        fly: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'handle animal': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        heal: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        intimidate: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        knowledge: {
          arcana: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          dungeoneering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          engineering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          geography: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          history: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          local: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nature: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nobility: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          planes: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          religion: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
        },
        linguistics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perception: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perform: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        profession: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        ride: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'sense motive': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'slight of hand': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        spellcraft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        stealth: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        survival: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        swim: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'use magic device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
      },
      languages: string,
      specialQualities: string,
    },
    specialAbilities: string,
    gear: string,
    ecology: number,
    // ecology: {
    //   environment: string,
    //   organization: string,
    //   treasure: string,
    // },
    miscellaneous: string,
  },
  '322': {
    introduction: {
      name: string,
      race: string,
      trait: [string],
      class: [{
        archetype: [string],
        name: string,
        level: number,
        hitDie: number,
        bab: number,
        first: boolean,
        skillRanks: 2,
        classSkills: [string],
        favored: {
          hp: number,
          skill: number,
          race: {
            name: string,
            count: number
          },
        },
        saves: {
          fort: boolean,
          ref: boolean,
          will: boolean,
        },
      }],
      alignment: string,
      size: string,
      sizeMod: number,
      type: string,
      subtype: [string],
      senses: ['low-light vision'],
      aura: string,
    },
    defense: {
      defensiveAbilities: string,
      dr: string,
      immune: string,
      resist: string,
      sr: string,
      weaknesses: [string],
    },
    offense: {
      speed: 20,
      specialAttacks: [
        {
          name: string,
          points: 0,
        },
        {
          name: string,
          exploits: [string],
        },
      ],
      spellLikeAbilities: string,
      spells: {
        class: string,
        casterLevel: number,
        casting: string,
        spells: {
          '2nd': {
            slots: number,
            prepared: [string],
          },
          '1st': {
            slots: number,
            prepared: [string],

          },
          Cantrips: {
            prepared: [string],
          },

        },
      },
    },
    tactics: string,
    statistics: {
      abilityScore: {
        strength: {
          pointBuy: number,
        },
        dexterity: {
          pointBuy: number,
          racial: number,

        },
        constitution: {
          pointBuy: number,
          enhancement: number,
        },
        intelligence: {
          pointBuy: number,
          enhancement: number,
          levelUp: number,
        },
        wisdom: {
          pointBuy: number,
          racial: number,
        },
        charisma: {
          pointBuy: number,
        },
      },
      feats: [string],
      skills: {
        acrobatics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        appraise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        bluff: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        climb: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        craft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        diplomacy: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'disable device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        disguise: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'escape artist': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        fly: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'handle animal': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        heal: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        intimidate: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        knowledge: {
          arcana: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          dungeoneering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          engineering: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          geography: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          history: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          local: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nature: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          nobility: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          planes: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
          religion: {
            points: number,
            ability: string,
            modifier: [{
              name: string,
              bonus: number,
            }],
          },
        },
        linguistics: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perception: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        perform: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        profession: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        ride: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'sense motive': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'slight of hand': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        spellcraft: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        stealth: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        survival: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        swim: {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
        'use magic device': {
          points: number,
          ability: string,
          modifier: [{
            name: string,
            bonus: number,
          }],
        },
      },
      languages: string,
      specialQualities: string,
    },
    specialAbilities: string,
    gear: string,
    ecology: number,
    // ecology: {
    //   environment: string,
    //   organization: string,
    //   treasure: string,
    // },
    miscellaneous: string,
  },

}

function state(): ExampleStateInterface {
  return {
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
        weaknesses: [''],
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
    ulurin: {
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
              name: 'gnome',
              count: 0,
            },
          },
          saves: {
            fort: false,
            ref: false,
            will: true,
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
        weaknesses: [''],
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
          spells: {
            '5th': {
              prepared: [
                'Force Wall',
                'Overland Flight',
                'Life Bubble',
              ],
            },
            '4th': {
              prepared: [
                'Greater Invisibility',
                'Dimension Door',
                'Freedom of Movement',
                'Emergency Force Sphere',
              ],
            },
            '3rd': {
              prepared: [
                'Dispel Magic',
                'Dispel Magic',
                'Haste',
                'Haste',
                'Heroism',
              ],
            },
            '2nd': {
              prepared: [
                'False Life',
                'Blur',
                'Mirror Image',
                'Invisibility',
                'Invisibility',
              ],
            },
            '1st': {
              prepared: [
                'Protection from Evil',
                'Enlarge Person',
                'Reduce Person',
                'Grease',
                'Shield',
                'Shield',
                'Mage Armor',
              ],
            },
            Cantrips: {
              prepared: [
                'Mending',
                'Detect Magic',
                'Mage Hand',
                'Light',
              ],
            },
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
        feats: [''],

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
            points: 9,
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
            points: 9,
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
              points: 9,
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
              points: 9,
              ability: 'intelligence',
              modifier: [],
            },
            religion: {
              points: 9,
              ability: 'intelligence',
              modifier: [],
            },
          },
          linguistics: {
            points: 9,
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
            points: 9,
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
            points: 9,
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
    sareah: {
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
        weaknesses: [''],
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
    },
    immogen: {
      introduction: {
        name: 'Immogen',
        solo: true,
        race: 'human',
        trait: [
          'fate\'s favored',
          'reactionary',
        ],
        class: [
          {
            name: 'gestalt',
            level: 11,
            first: true,
            gestalt: [
              {
                archetype: ['archaeologist'],
                name: 'bard',
                hitDie: 8,
                bab: 3 / 4,
                skillRanks: 2,
                classSkills: [
                  'Acrobatics',
                  'Appraise',
                  'Bluff',
                  'Climb',
                  'Craft',
                  'Diplomacy',
                  'Disguise',
                  'Escape Artist',
                  'Intimidate',
                  'Knowledge',
                  'Linguistics',
                  'Perception',
                  'Perform',
                  'Profession',
                  'Sense Motive',
                  'Sleight of Hand',
                  'Spellcraft',
                  'Stealth',
                  'Use Magic Device',
                ],
                favored: {
                  hp: 0,
                  skill: 0,
                  race: {
                    human: 11,
                  },
                },
                saves: {
                  fort: false,
                  ref: true,
                  will: true,
                },
                spells: {
                  casterLevel: 11,
                  casting: 'spontaneous',
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
              {
                archetype: ['dual-cursed'],
                name: 'oracle',
                hitDie: 8,
                bab: 3 / 4,
                first: true,
                skillRanks: 2,
                classSkills: [
                  'Acrobatics',
                  'Appraise',
                  'Bluff',
                  'Climb',
                  'Craft',
                  'Diplomacy',
                  'Disguise',
                  'Escape Artist',
                  'Intimidate',
                  'Knowledge',
                  'Linguistics',
                  'Perception',
                  'Perform',
                  'Profession',
                  'Sense Motive',
                  'Sleight of Hand',
                  'Spellcraft',
                  'Stealth',
                  'Use Magic Device',
                ],
                favored: {
                  hp: 0,
                  skill: 0,
                  race: {
                    human: 11,
                  },
                },
                saves: {
                  fort: false,
                  ref: false,
                  will: true,
                },
                spells: {
                  casterLevel: 11,
                  casting: 'spontaneous',
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
            ],
          },
        ],
        alignment: 'CG',
        size: 'medium',
        sizeMod: 0,
        type: 'humanoid',
        subtype: ['human'],
        senses: [''],
        aura: '',
      },
      defense: {
        defensiveAbilities: '',
        dr: '',
        resist: '',
        sr: '',
        weaknesses: ['cold'],
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
      },
      tactics: '',
      statistics: {
        abilityScore: {
          strength: {
            pointBuy: 11,
            automaticBonusProgression: 0,
          },
          dexterity: {
            pointBuy: 14,
            automaticBonusProgression: 4,

          },
          constitution: {
            pointBuy: 12,
            automaticBonusProgression: 2,

          },
          intelligence: {
            pointBuy: 14,
            automaticBonusProgression: 0,

          },
          wisdom: {
            pointBuy: 12,
            automaticBonusProgression: 2,

          },
          charisma: {
            pointBuy: 16,
            automaticBonusProgression: 4,
            levelUp: 2,
            racial: 2,
          },
        },
        feats: [
          'Defiant Luck',
          'Auspicious Birth (Retrograde)',
          'Racial Heritage (Catfolk)',
          'Spellsong (Diplomacy)',
          'Black Cat, Deft Maneuvers',
          'Lingering Performance',
          'Inexplicable Luck',
          'Lucky x2',
          'Combat Reflexes, Extra Revelation',
          'Lady Luck\'s Guidance',
          'Cosmic Gate',
          'Blood of Heroes',
          'Hero\'s Fortune',
          'Luck of Heroes',
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

    oldImmogen: {
      name: 'Immogen',
      level: Number,

      feats: [
        'Defiant Luck',
        'Auspicious Birth (Retrograde)',
        'Racial Heritage (Catfolk)',
        'Spellsong (Diplomacy)',
        'Black Cat, Deft Maneuvers',
        'Lingering Performance',
        'Inexplicable Luck',
        'Lucky x2',
        'Combat Reflexes, Extra Revelation',
        'Lady Luck\'s Guidance',
        'Cosmic Gate',
        'Blood of Heroes',
        'Hero\'s Fortune',
        'Luck of Heroes',
      ],
      traits: ['Fate\'s Favored', 'Reactionary'],

      alignment: 'CG',
      pointBuy: {
        strength: 11,
        dexterity: 14,
        constitution: 12,
        intelligence: 14,
        wisdom: 12,
        charisma: 16,
      },

      race: 'Human',
      racialTraits: ['Bonus Feat', 'Skilled'],
      languages: ['Common'],
      size: 'medium',
      type: 'humanoid',
      subtype: ['human'],
      speed: 30,
      favoredClassBonus: 1,

      classFeatures: Object,

      class: [
        {
          name: 'Bard',
          archetypeName: ['Archeologist'],
          hitDie: 8,
          babProgression: 0.75,
          level: 11,
          spellsPrepared: {
            '4th (3/day)': [
              'Invisibility, Greater',
              'Dimension Door',
            ],
            '3rd (6/day)': [
              'Haste',
              'Glibness',
              'Major Image',
              'Charm monster',
              'Confusion',
              'Good Hope',
            ],
            '2nd (6/day)': [
              'Heroism',
              'Gallant Inspiration',
              'Blur',
              'Invisibility',
              'Heroic Fortune',
              'Share Memory',
              'Detect Thoughts',
              'Mirror Image',
            ],
            '1st (7/day)': [
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
            Cantrips: [
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
          goodSaves: {
            fort: false,
            ref: true,
            will: true,
          },
          casterLevel: '11th',
          casting: 'spontanious',
          classSkills: [
            'Acrobatics',
            'Appraise',
            'Bluff',
            'Climb',
            'Craft',
            'Diplomacy',
            'Disguise',
            'Escape Artist',
            'Intimidate',
            'Knowledge',
            'Linguistics',
            'Perception',
            'Perform',
            'Profession',
            'Sense Motive',
            'Sleight of Hand',
            'Spellcraft',
            'Stealth',
            'Use Magic Device',
          ],
        },
        {
          name: 'Oracle',
          archetypeName: ['Dual-Cursed'],
          hitDie: 8,
          babProgression: 0.75,
          level: 11,
          spellsPrepared: {
            '5th (5/day)': [
              'Slay Living',
              'Permanency',
              'Plane Shift',

            ],
            '4th (7/day)': [
              'Sending',
              'Dimensional Anchor',
              'Dismissal',
              'Imbue with Spell Ability',
              'Threefold Aspect',
              'Wall of Fire',
              'Freedom of Movement',

            ],
            '3rd (8/day)': [
              'Dispel Magic',
              'Stunning Barrier',
              'Stone Shape',
              'Second Wind',
              'Shield of Wings',
              'Beacon of Luck',
              'Bestow Curse',

            ],
            '2nd (8/day)': [
              'Hold person',
              'Silence',
              'Resist Energy',
              'Zone of Truth',
              'Ironskin',
              'Weapon of Awe',
              'Oracle\'s Burden',
              'Scorching Ray',
              'Detect Magic, Greater',

            ],
            '1st (8/day)': [
              'Shield of Faith',
              'Moment of Greatness',
              'Murderous Command',
              'Protection from Law',
              'Lucky Number',
              'Fallback Strategy',
              'Sure casting',
              'Ill Omen',
              'Burning Hands',

            ],
            Orisons: [
              'Create Water',
              'Read Magic',
              'Stabilize',
              'Enhance Diplomacy',
              'Purify Food and Drink',
              'Mending',
              'Vigor',
              'Spark',
            ],
          },
          goodSaves: {
            fort: false,
            ref: false,
            will: true,
          },
          casterLevel: '11th',
          casting: 'spontanious',
          classSkills: [
            'Craft',
            'Diplomacy',
            'Heal',
            'Knowledge (history)',
            'Knowledge (planes)',
            'Knowledge (religion)',
            'Profession',
            'Sense Motive',
            'Spellcraft',
          ],

        },
      ],
      gestalt: true,

      armorClassBonuses: [
        {
          name: 'Armor',
          bonus: 8,
          touch: false,
          flatFooted: true,
          maxDex: 8,
          armorCheckPenalty: -2,
        }, {
          name: 'deflection',
          bonus: 2,
          touch: true,
          flatFooted: true,
        }, {
          name: 'natural',
          bonus: 2,
          touch: false,
          flatFooted: true,
        }, {
          name: 'insight',
          bonus: 1,
          touch: true,
          flatFooted: true,
        },
      ],

      resistanceBonus: 4,
      soloPlayer: true,

      saveAbilityScore: {
        fort: 'constitution',
        ref: 'charisma',
        will: 'wisdom',
      },

      skill: {
        Bluff: { ranks: 11 },
        Climb: { ranks: 1 },
        Diplomacy: { ranks: 11 },
        'Disable Device': { ranks: 6 },
        Disguise: { ranks: 7 },
        Fly: { ranks: 3 },
        Intimidate: { ranks: 7 },
        Knowledge:
          {
            ranks: 0,
            bonus: 'Bardic Knowledge',
          },
        Linguistics: { ranks: 1 },
        Perception: { ranks: 11 },
        Ride: { ranks: 7 },
        'Sense Motive': { ranks: 7 },
        'Sleight of Hand': { ranks: 7 },
        Spellcraft: { ranks: 7 },
        Stealth: { ranks: 11 },
        'Use Magic Device': { ranks: 2 },
      },

    },

    322: {
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
      },
      defense: {
        defensiveAbilities: '',
        dr: '',
        immune: '',
        resist: '',
        sr: '',
        weaknesses: [''],
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

        spells: {
          class: 'oracle',
          casterLevel: 9,
          casting: 'spontanious',
          spells: {
            '4th': {
              slots: 5,
              prepared: [
                'Aura of Doom',
                'Mark of the Reptile God',
              ],
            },
            '3rd': {
              slots: 8,
              prepared: [
                'Inflict Serious Wounds',
                'Cure Serious Wounds',
                'Dispel Magic',
                'Blindness/Deafness',
                'Bestow Curse',
              ],
            },
            '2nd': {
              slots: 8,
              prepared: [
                'Admonishing Ray',
                'Cure Mod Wounds',
                'Disfiguring Touch',
                'Ghoul Touch',
                'Hold Person',
                'Create Pit',
              ],
            },
            '1st': {
              slots: 8,
              prepared: [
                'Burning Disarm',
                'Cure Light Wounds',
                'Death Watch',
                'Murderous Command',
                'Ray of Sickening',
                'Shield of Faith',
                'Bane',
              ],
            },
            Orisons: {
              prepared: [
                'Bleed',
                'Detect Magic',
                'Read Magic',
                'Light',
                'Guidance',
                'Stabilize',
                '???',
                '???',
              ],
            },
          },
          patronSpells: {},
          mysterySpells: {
            name: 'Dark Tapestry',
            '1st': 'Entropic Shield',
            '2nd': 'Dust of Twilight',
            '3rd': 'Tongues',
            '4th': 'Black Tentacles',
          },
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
            points: 9,
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
            points: 9,
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
              points: 9,
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
              points: 9,
              ability: 'intelligence',
              modifier: [],
            },
            religion: {
              points: 9,
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
            points: 2,
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
            points: 9,
            ability: 'intelligence',
            modifier: [],
          },
          stealth: {
            points: 9,
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

        },

        feats: [''],
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
    default: {
      introduction: {
        name: 'default',
        race: 'locathah',
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
      },
      defense: {
        defensiveAbilities: '',
        dr: '',
        immune: '',
        resist: '',
        sr: '',
        weaknesses: [''],
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

        spells: {
          class: 'oracle',
          casterLevel: 9,
          casting: 'spontanious',
          spells: {
            '4th': {
              slots: 5,
              prepared: [
                'Aura of Doom',
                'Mark of the Reptile God',
              ],
            },
            '3rd': {
              slots: 8,
              prepared: [
                'Inflict Serious Wounds',
                'Cure Serious Wounds',
                'Dispel Magic',
                'Blindness/Deafness',
                'Bestow Curse',
              ],
            },
            '2nd': {
              slots: 8,
              prepared: [
                'Admonishing Ray',
                'Cure Mod Wounds',
                'Disfiguring Touch',
                'Ghoul Touch',
                'Hold Person',
                'Create Pit',
              ],
            },
            '1st': {
              slots: 8,
              prepared: [
                'Burning Disarm',
                'Cure Light Wounds',
                'Death Watch',
                'Murderous Command',
                'Ray of Sickening',
                'Shield of Faith',
                'Bane',
              ],
            },
            Orisons: {
              prepared: [
                'Bleed',
                'Detect Magic',
                'Read Magic',
                'Light',
                'Guidance',
                'Stabilize',
                '???',
                '???',
              ],
            },
          },
          patronSpells: {},
          mysterySpells: {
            name: 'Dark Tapestry',
            '1st': 'Entropic Shield',
            '2nd': 'Dust of Twilight',
            '3rd': 'Tongues',
            '4th': 'Black Tentacles',
          },
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

        },

        feats: [''],
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

  };
}

export default state;
