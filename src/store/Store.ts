import { defineStore } from 'pinia';
import {
  Game,
  MonsterList,
  Campaign,
  // Equipment,
  ExpansionInterface,
  ExpansionsName,
  ArmorPiece,
  Weapon,
  WeaponAbbreviation,
} from '@/types/app';

import {
  ancientForestCoreMonsterList,
  wilspireDesertCoreMonsterList,
  kuluYaKuExpansionMonsterList,
  kusharadaoraExpansionMonsterList,
  teostraExpansionMonsterList,
  nergiganteExpansionMonsterList,
} from '../staticDB/Expansions';

import {
  coreWeaponList,
  kuluYaKuExpansionWeaponList,
  kusharadaoraExpansionWeaponList,
  teostraExpansionWeaponList,
  nergiganteExpansionWeaponList,
  hunterArsenalExpansionWeaponList,
} from '../staticDB/Weapons';

import {
  coreArmorList,
  kuluYaKuExpansionArmorList,
  kusharadaoraExpansionArmorList,
  teostraExpansionArmorList,
  nergiganteExpansionArmorList,
  hunterArsenalExpansionArmorList,
} from '../staticDB/Armors';

// https://pinia.vuejs.org/core-concepts/
interface MHWBGStore {
  currentGame: Game | Record<string, never>
  monsters : MonsterList | Record<string, never>
  expansions: Record<ExpansionsName, ExpansionInterface>
  equipment: {
    weapons: Record<WeaponAbbreviation, Array<Weapon>>
    head: Array<ArmorPiece>,
    torso: Array<ArmorPiece>,
    legs: Array<ArmorPiece>,
  }
}

export default defineStore('MHWBG_Store', {
  state: ():MHWBGStore => ({
    currentGame: {},
    monsters: {},
    expansions: {
      AncientForestCore: { include: true, name: 'Ancien Forest' },
      WilspireDesertCore: { include: false, name: 'Wildspire' },
      TeostraExpansion: { include: false, name: 'Teostra' },
      NergiganteExpansion: { include: false, name: 'Nergigante' },
      KusharadaoraExpansion: { include: false, name: 'Kusharadaora' },
      KuluYaKuExpansion: { include: false, name: 'Kulu Ya Ku' },
      HunterArsenalExpansion: { include: false, name: 'Hunter Arsenal' },
    },
    equipment: {
      weapons: {
        bow: [],
        charge_blade: [],
        ds: [],
        gs: [],
        gunlance: [],
        hammer: [],
        hbg: [],
        hh: [],
        insect_glaive: [],
        lance: [],
        lbg: [],
        ls: [],
        sns: [],
        switch_axe: [],
      },
      head: [],
      torso: [],
      legs: [],
    },
  }),
  actions: {
    updateExpansions(expansionsName:ExpansionsName, expansionStatus:boolean) {
      this.expansions[expansionsName].include = expansionStatus;
      this.enableExpansions();
    },
    enableExpansions() {
      this.monsters = {};
      Object.entries(this.expansions).forEach(([expansionKey, expansion]) => {
        if (expansion.include) {
          switch (expansionKey) {
            case 'AncientForestCore': {
              this.addAncientForestCoreMonsterList();
              break;
            }

            case 'WilspireDesertCore': {
              this.addWilspireDesertCoreMonsterList();

              break;
            }

            case 'TeostraExpansion': {
              this.addTeostraExpansionMonsterList();

              break;
            }

            case 'NergiganteExpansion': {
              this.addNergiganteExpansionMonsterList();

              break;
            }

            case 'KusharadaoraExpansion': {
              this.addKusharadaoraExpansionMonsterList();

              break;
            }

            case 'KuluYaKuExpansion': {
              this.addKuluYaKuExpansionMonsterList();

              break;
            }

            case 'HunterArsenalExpansion': {
              this.addHunterArsenalExpansionMonsterList();

              break;
            }

            default:

              break;
          }
        }
      });
    },
    addAncientForestCoreMonsterList() {
      this.monsters = {
        ...ancientForestCoreMonsterList,
        ...this.monsters,
      };
      if (this.expansions.WilspireDesertCore.include) {
        // Equipment already included
      } else {
        this.equipment = {
          ...coreWeaponList,
          ...coreArmorList,
          ...this.equipment,
        };
      }
    },
    addWilspireDesertCoreMonsterList() {
      this.monsters = {
        ...wilspireDesertCoreMonsterList,
        ...this.monsters,
      };
      if (this.expansions.AncientForestCore.include) {
        // Equipment already included
      } else {
        this.equipment = {
          ...coreWeaponList,
          ...coreArmorList,
          ...this.equipment,
        };
      }
    },
    addTeostraExpansionMonsterList() {
      this.monsters = {
        ...teostraExpansionMonsterList,
        ...this.monsters,
      };

      this.equipment = {
        ...teostraExpansionWeaponList,
        ...teostraExpansionArmorList,
        ...this.equipment,
      };
    },
    addNergiganteExpansionMonsterList() {
      this.monsters = {
        ...nergiganteExpansionMonsterList,
        ...this.monsters,
      };

      this.equipment = {
        ...nergiganteExpansionWeaponList,
        ...nergiganteExpansionArmorList,
        ...this.equipment,
      };
    },
    addKusharadaoraExpansionMonsterList() {
      this.monsters = {
        ...kusharadaoraExpansionMonsterList,
        ...this.monsters,
      };

      this.equipment = {
        ...kusharadaoraExpansionWeaponList,
        ...kusharadaoraExpansionArmorList,
        ...this.equipment,
      };
    },
    addKuluYaKuExpansionMonsterList() {
      this.monsters = {
        ...kuluYaKuExpansionMonsterList,
        ...this.monsters,
      };

      this.equipment = {
        ...kuluYaKuExpansionWeaponList,
        ...kuluYaKuExpansionArmorList,
        ...this.equipment,
      };
    },
    addHunterArsenalExpansionMonsterList() {
      // TODO;
      console.debug(hunterArsenalExpansionWeaponList);
      console.debug(hunterArsenalExpansionArmorList);
      // Object.keys(this.equipment.weapons).forEach((weaponType) => {
      //   const wpnType = weaponType as WeaponAbbreviation;
      //   this.equipment.weapons[wpnType] = this.equipment.weapons[wpnType]
      //     .concat(hunterArsenalExpansionWeaponList[weaponType]);
      // });

      // this.equipment.head = this.equipment.head.concat(hunterArsenalExpansionArmorList.head);
      // this.equipment.torso = this.equipment.torso.concat(hunterArsenalExpansionArmorList.torso);
      // this.equipment.legs = this.equipment.legs.concat(hunterArsenalExpansionArmorList.legs);
    },
    createNewCampaign(campaign:Campaign) {
      this.currentGame = campaign;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'MHWBG_companion',
        storage: localStorage,
      },
    ],
  },
});
