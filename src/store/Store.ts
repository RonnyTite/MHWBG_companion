import { defineStore } from 'pinia';
import {
  Game,
  MonsterList,
  Campaign,
  ExpansionInterface,
  ExpansionsName,
} from '@/types/app';

import {
  ancientForestCoreMonsterList,
  wilspireDesertCoreMonsterList,
  kuluYaKuExpansionMonsterList,
  kusharadaoraExpansionMonsterList,
  teostraExpansionMonsterList,
  nergiganteExpansionMonsterList,
} from '../staticDB/Expansions';

// https://pinia.vuejs.org/core-concepts/
interface MHWBGStore {
  currentGame: Game | Record<string, never>
  monsters : MonsterList | Record<string, never>
  expansions: Record<ExpansionsName, ExpansionInterface>
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
    },
    addWilspireDesertCoreMonsterList() {
      this.monsters = {
        ...wilspireDesertCoreMonsterList,
        ...this.monsters,
      };
    },
    addTeostraExpansionMonsterList() {
      this.monsters = {
        ...teostraExpansionMonsterList,
        ...this.monsters,
      };
    },
    addNergiganteExpansionMonsterList() {
      this.monsters = {
        ...nergiganteExpansionMonsterList,
        ...this.monsters,
      };
    },
    addKusharadaoraExpansionMonsterList() {
      this.monsters = {
        ...kusharadaoraExpansionMonsterList,
        ...this.monsters,
      };
    },
    addKuluYaKuExpansionMonsterList() {
      this.monsters = {
        ...kuluYaKuExpansionMonsterList,
        ...this.monsters,
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
