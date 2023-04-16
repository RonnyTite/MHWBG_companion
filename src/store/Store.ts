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
} from '../staticDB/Weapons';

import {
  coreArmorList,
  kuluYaKuExpansionArmorList,
  kusharadaoraExpansionArmorList,
  teostraExpansionArmorList,
  nergiganteExpansionArmorList,
} from '../staticDB/Armors';

// https://pinia.vuejs.org/core-concepts/
interface MHWBGStore {
  currentGame: Game | Record<string, never>
  monsters : MonsterList | Record<string, never>
  expansions: Record<ExpansionsName, ExpansionInterface>
  equipment: Record<string, Array<Weapon | ArmorPiece>> | Record<string, never>
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
    },
    equipment: {

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
