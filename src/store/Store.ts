import { defineStore } from 'pinia';
import {
  Game,
  Monster,
  Campaign,
} from '@/types/app';

// https://pinia.vuejs.org/core-concepts/
interface MHWBGStore {
  currentGame: Game | Record<string, never>
  monsters : MonsterList | Record<string, never>
}

interface MonsterList {
  [x:string]: Monster
}

const ancientForestCoreMonsterList:MonsterList = {
  jagras: {
    name: 'Jagras',
    icon: './assets/monsters/jagras.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 50,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
  tobiKadachi: {
    name: 'Tobi Kadachi',
    icon: './assets/monsters/tobiKadachi.png',
    healthPoint: 0,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
  anjanath: {
    name: 'Anjanath',
    icon: './assets/monsters/anjanath.png',
    healthPoint: 0,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
  rathalos: {
    name: 'Rathalos',
    icon: './assets/monsters/rathalos.png',
    healthPoint: 0,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 80,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
  rathalosVariant: {
    name: 'Azure Rathalos',
    icon: './assets/monsters/rathalos-Variant.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },

};

const wilspireDesertCoreMonsterList:MonsterList = {
  barroth: {
    name: 'barroth',
    icon: './assets/monsters/barroth.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
  jyuratodus: {
    name: 'Jyuratodus',
    icon: './assets/monsters/jyuratodus.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
  pukeiPukei: {
    name: 'Pukei Pukei',
    icon: './assets/monsters/pukeiPukei.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
  diablos: {
    name: 'Diablos',
    icon: './assets/monsters/diablos.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
  diablosVariant: {
    name: 'Black Diablos',
    icon: './assets/monsters/diablosVariant.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },

};

const kuluYaKuExpansionMonsterList:MonsterList = {
  kuluYaKu: {
    name: 'Kulu Ya Ku',
    icon: './assets/monsters/kuluYaKu.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
};

const kusharadaoraExpansionMonsterList:MonsterList = {
  kusharadaora: {
    name: 'Kusharadaora',
    icon: './assets/monsters/kusharadaora.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
};

const teostraExpansionMonsterList:MonsterList = {
  teostra: {
    name: 'Teostra',
    icon: './assets/monsters/teostra.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
};

const nergiganteExpansionMonsterList:MonsterList = {
  nergigante: {
    name: 'Nergigante',
    icon: './assets/monsters/nergigante.png',
    healthPoint: 65,
    rank: {
      0: {
        rank: 1,
        maxHealthPoint: 65,
      },
      1: {
        rank: 2,
        maxHealthPoint: 65,
      },
      2: {
        rank: 3,
        maxHealthPoint: 65,
      },
    },
  },
};

export default defineStore('MHWBG_Store', {
  state: ():MHWBGStore => ({
    currentGame: {},
    monsters: {},
  }),
  actions: {
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
    addKuluYaKuExpansionMonsterList() {
      this.monsters = {
        ...kuluYaKuExpansionMonsterList,
        ...this.monsters,
      };
    },
    addKusharadaoraExpansionMonsterList() {
      this.monsters = {
        ...kusharadaoraExpansionMonsterList,
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
