import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {

  cr() {
    return '';
  },
  xp() {
    return '';
  },
  level() {
    return ExampleStateInterface.penelope.class.reduce((accumulator, cur) => accumulator + cur.level, 0);
  },
  initiative() {
    // TODO
    // reactionary
    // ioun stone
    // Pranked
    return abilityMods.dexterity + 2 + 1 - 4;
  },
  sizeModifier() {
    let tempSize = introData.sizeMod;

    toggleKeys.forEach((button) => {
      if ((typeof toggle[button].bonus !== 'undefined') && 'size' in toggle[button].bonus && toggle[button].active) {
        tempSize += toggle[button].bonus.size;
      }
    });

    return tempSize;
  },
  // DEFENSE
  defense() {
    const abilityMods = { ...this.abilityMods };
    const charLevel = this.introduction.level();
    const toggle = { ...this.toggle };
    const intro = { ...this.introduction };
    const charData = { ...this.character };

    return {

      ac() {
        const abp = {
          armorEnhancement: 2,
          deflection: 2,
          naturalArmorEnhancement: 2,
        };

        const abpKeys = Object.keys(abp);

        let tempAC = 10;

        abpKeys.forEach((key) => {
          tempAC += abp[key];
        });

        tempAC += abilityMods.dexterity + intro.sizeModifier();

        const toggleKeys = Object.keys(toggle);
        const gearKeys = Object.keys(charData.gear);

        toggleKeys.forEach((button) => {
          if ('bonus' in toggle[button] && 'ac' in toggle[button].bonus && toggle[button].active) {
            if ('bonusType' in toggle[button] && toggle[button].bonusType in abp) {
              tempAC += Math.max(
                toggle[button].bonus.ac - abp[toggle[button].bonusType],
                abp[toggle[button].bonusType] - toggle[button].bonus.ac,
              );
            } else {
              tempAC += toggle[button].bonus.ac;
            }
          }
        });

        gearKeys.forEach((item) => {
          if (
            typeof charData.gear[item] === 'object'
            && 'bonus' in charData.gear[item]
            && 'ac' in charData.gear[item].bonus
          ) {
            tempAC += charData.gear[item].bonus.ac;
          }
        });

        return tempAC;
      },
      maxHP() {
        let hitPoints = 0;

        let maxHitDie = 0;

        const CharClasses = charData.introduction.class;

        CharClasses.forEach((charClass) => {
          if (charClass.name !== 'gestalt') {
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
          } else {
            charClass.gestalt.forEach((gestaltClass) => {
              maxHitDie = Math.max(gestaltClass.hitDie, maxHitDie);
            });
          }
        });

        if (charData.introduction.solo) {
          hitPoints = maxHitDie * charLevel;
        }

        hitPoints += charLevel * abilityMods.constitution;

        return hitPoints;
      },
      currHP() {
        return this.maxHP();
      },
      savingThrows() {
        const totalSaves = {
          fort: 0,
          ref: 0,
          will: 0,
        };

        const resistanceBonus = 4;

        let toggleBonus = 0;

        const toggleKeys = Object.keys(toggle);

        toggleKeys.forEach((button) => {
          if ((typeof toggle[button].bonus !== 'undefined') && 'saves' in toggle[button].bonus && toggle[button].active) {
            toggleBonus += toggle[button].bonus.saves;
          }
        });

        toggleKeys.forEach((button) => {
          if ((typeof toggle[button].bonus !== 'undefined') && 'ref' in toggle[button].bonus && toggle[button].active) {
            totalSaves.ref += toggle[button].bonus.ref;
          }
        });

        const saveKeys = Object.keys(charData.defense.saveAbilityScore);

        saveKeys.forEach((save) => {
          totalSaves[save] += abilityMods[charData.defense.saveAbilityScore[save]];
          if (
            charData.introduction.class[0].gestalt[0].saves[save]
            || charData.introduction.class[0].gestalt[1].saves[save]
          ) {
            totalSaves[save] += 2;
            totalSaves[save] += Math.floor(charData.introduction.class[0].level / 2);
          } else {
            totalSaves[save] += Math.floor(charData.introduction.class[0].level / 3);
          }

          totalSaves[save] += resistanceBonus + toggleBonus;
        });
        return totalSaves;
      },

    };
  },
  // OFFENSE

  speed() {
    return this.character.offense.speed;
  },
  melee() {
    const toggle = { ...this.toggle };

    const toggleKeys = Object.keys(toggle);

    let twoHanding = 0;

    if (toggle['two handing'].active) twoHanding = 1;

    let tempAttack = Math.max(this.abilityMods.dexterity, this.abilityMods.strength) + this.baseAtk
      + this.character.introduction.sizeMod;
    let tempDamage = Math.floor(this.abilityMods.strength * (1 + (0.5 * twoHanding)));

    let tempDexDamage = Math.floor(this.abilityMods.dexterity);

    if (toggle['power attack'].active) {
      tempAttack += -(Math.floor(this.baseAtk / 4) + 1);
      tempDamage += (Math.floor(this.baseAtk / 4) + 1) * (2 + twoHanding);
      tempDexDamage += (Math.floor(this.baseAtk / 4) + 1) * 2;
    }

    const dieSizeMod = this.introduction.sizeModifier();

    let holy = '';

    if (toggle.holy.active) {
      holy = ' plus 2d6';
    } else {
      holy = '';
    }

    toggleKeys.forEach((button) => {
      if ((typeof toggle[button].bonus !== 'undefined') && 'weaponDamage' in toggle[button].bonus && toggle[button].active) {
        tempDexDamage += toggle[button].bonus.weaponDamage;
        tempDamage += toggle[button].bonus.weaponDamage;
      }
      if ((typeof toggle[button].bonus !== 'undefined') && 'attackRolls' in toggle[button].bonus && toggle[button].active) {
        tempAttack += toggle[button].bonus.attackRolls;
      }
    });

    const option = {
      name: 'Stella\'s Holy Cutlass',
      attack: tempAttack + 2,
      dieCount: 1,
      dieSize: 6 - dieSizeMod,
      damage: tempDexDamage + 2,
      critRange: 15,
    };

    return `${option.name} ${this.formatBonus(option.attack)} \
      (${option.dieCount}d${option.dieSize}${this.formatBonus(option.damage)}/${option.critRange}-20${holy})`;
  },
  ranged() {
    const toggle = { ...this.toggle };

    const toggleKeys = Object.keys(toggle);

    let tempAttack = Math.max(this.abilityMods.dexterity, this.abilityMods.strength) + this.baseAtk
      + this.character.introduction.sizeMod;
    let tempDamage = this.abilityMods.strength;

    if (toggle['power attack'].active) {
      tempAttack += -(Math.floor(this.baseAtk / 4) + 1);
      tempDamage += (Math.floor(this.baseAtk / 4) + 1) * 2;
    }

    const dieSizeMod = this.introduction.sizeModifier();

    toggleKeys.forEach((button) => {
      if ((typeof toggle[button].bonus !== 'undefined') && 'weaponDamage' in toggle[button].bonus && toggle[button].active) {
        tempDamage += toggle[button].bonus.weaponDamage;
      }
      if ((typeof toggle[button].bonus !== 'undefined') && 'attackRolls' in toggle[button].bonus && toggle[button].active) {
        tempAttack += toggle[button].bonus.attackRolls;
      }
    });

    const option = {
      name: 'Furies\' Flaming Burst Longbow',
      attack: tempAttack + 2,
      dieCount: 1,
      dieSize: 8 - dieSizeMod,
      damage: tempDamage + 2,
      critRange: 20,
    };

    return `${option.name} ${this.formatBonus(option.attack)} \
      (${option.dieCount}d${option.dieSize}${this.formatBonus(option.damage)})`;
  },

  space() {
    return '5';
  },
  reach() {
    return '5';
  },
  specialAttacks() {
    return {
      maxReservoir: Math.floor(this.character.introduction.class[0].level / 2) + 3,
      currResevoir: Math.floor(this.character.introduction.class[0].level / 2) + 3,
    };
  },

  // TACTICS
  tactics() {
    return {};
  },

  // STATISTICS

  abilityScores() {
    const toggle = { ...this.toggle };
    const toggleKeys = Object.keys(toggle);

    const tempAbilityScores: Record<string, number> = { ...this.character.statistics.abilityScore };

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

    let maxBAB = 0;

    const CharClasses = this.character.introduction.class;

    CharClasses.forEach((charClass) => {
      if (charClass.name !== 'gestalt') {
        bab += Math.floor(charClass.level * charClass.bab);
      } else {
        charClass.gestalt.forEach((gestaltClass) => {
          maxBAB = Math.max(gestaltClass.hitDie, maxBAB);
        });
      }
      bab += maxBAB;
      maxBAB = 0;
    });

    return bab;
  },
  cmb() {
    const toggle = { ...this.toggle };

    const toggleKeys = Object.keys(toggle);

    let tempCMB = this.abilityMods.strength + this.baseAtk - this.character.introduction.sizeMod;

    toggleKeys.forEach((button) => {
      if ((typeof toggle[button].bonus !== 'undefined')
        && 'attackRolls' in toggle[button].bonus
        && toggle[button].active) {
        tempCMB += toggle[button].bonus.attackRolls;
      }
    });

    return tempCMB;
  },
  cmd() {
    return 10 + this.abilityMods.dexterity
      + this.abilityMods.strength + this.baseAtk
      - this.character.introduction.sizeMod;
  },
  skills() {
    const toggle = { ...this.toggle };

    const toggleKeys = Object.keys(toggle);

    const skillRanks = { ...this.character.statistics.skills };

    const skills = {
      acrobatics: 0,
      appraise: 0,
      bluff: 0,
      climb: 0,
      craft: 0,
      diplomacy: 0,
      'disable device': 0,
      disguise: 0,
      'escape artist': 0,
      fly: 0,
      'handle animal': 0,
      heal: 0,
      intimidate: 0,
      knowledge: {
        arcana: 0,
        dungeoneering: 0,
        engineering: 0,
        geography: 0,
        history: 0,
        local: 0,
        nature: 0,
        nobility: 0,
        planes: 0,
        religion: 0,
      },
      linguistics: 0,
      perception: 0,
      perform: 0,
      profession: 0,
      ride: 0,
      'sense motive': 0,
      'slight of hand': 0,
      spellcraft: 0,
      stealth: 0,
      survival: 0,
      swim: 0,
      'use magic device': 0,
    };

    if (this.character.introduction.sizeMod !== 0) {
      skills.fly += (Math.log2(this.character.introduction.sizeMod) + 1) * 2;
      skills.stealth += (Math.log2(this.character.introduction.sizeMod) + 1) * 4;
    }
    const classSkills = [...this.character.introduction.class[0].gestalt[0].classSkills];

    Array.prototype.push.apply(classSkills, [...this.character.introduction.class[0].gestalt[1].classSkills]);

    const knowledge = { ...this.character.statistics.skills.knowledge };

    const knowledgeKeys = Object.keys(knowledge);

    const keys = Object.keys(skills);

    const summarySkills = {
      knowledge: {},
    };

    keys.forEach((skillKey) => {
      classSkills.forEach((classSkill) => {
        if (classSkill === skillKey && skillRanks[skillKey].ranks >= 1) skills[skillKey] += 3;
        if (classSkill === skillKey && classSkill === 'knowledge') {
          knowledgeKeys.forEach((knowledgeSkillKey) => {
            if (skillRanks.knowledge[knowledgeSkillKey].ranks >= 1) {
              skills.knowledge[knowledgeSkillKey] += 3;
            }
          });
        }
      });
      if (skillKey === 'knowledge') {
        knowledgeKeys.forEach((knowledgeSkillKey) => {
          skills.knowledge[knowledgeSkillKey] += skillRanks.knowledge[knowledgeSkillKey].ranks;
          skills.knowledge[knowledgeSkillKey] += this.abilityMods[skillRanks.knowledge[knowledgeSkillKey].ability];
          toggleKeys.forEach((button) => {
            if ((typeof toggle[button].bonus !== 'undefined') && 'skills' in toggle[button].bonus && toggle[button].active) {
              skills.knowledge[knowledgeSkillKey] += toggle[button].bonus.skills;
            }
          });
          if (this.character.specialAbilities.abilities.includes('Bardic Knowledge')) {
            skills.knowledge[knowledgeSkillKey] += this.introduction.level();
          }
          if (skillRanks.knowledge[knowledgeSkillKey].ranks >= 1 || this.character.specialAbilities.abilities.includes('Bardic Knowledge')) {
            summarySkills.knowledge[knowledgeSkillKey] = skills.knowledge[knowledgeSkillKey];
          }
        });
      } else {
        skills[skillKey] += skillRanks[skillKey].ranks;
        skills[skillKey] += this.abilityMods[skillRanks[skillKey].ability];
        skills[skillKey] += skillRanks[skillKey].modifier.reduce((accumulator, cur) => accumulator + cur.bonus, 0);
        toggleKeys.forEach((button) => {
          if ((typeof toggle[button].bonus !== 'undefined') && 'skills' in toggle[button].bonus && toggle[button].active) {
            skills[skillKey] += toggle[button].bonus.skills;
          }
        });

        if (skillRanks[skillKey].ranks >= 1) {
          summarySkills[skillKey] = skills[skillKey];
        }
      }
    });

    return {
      skills,
      summarySkills,
    };
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

};

export default getters;
