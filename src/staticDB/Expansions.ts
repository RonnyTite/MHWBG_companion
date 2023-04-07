import { MonsterList } from '../types/app.d';

const ancientForestCoreMonsterList:MonsterList = {
  jagras: {
    name: 'Jagras',
    icon: './assets/monsters/jagras.png',
    healthPoint: 65,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 50,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      3: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },
  tobikadachi: {
    name: 'Tobi Kadachi',
    icon: './assets/monsters/tobiKadachi.png',
    healthPoint: 0,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      3: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },
  anjanath: {
    name: 'Anjanath',
    icon: './assets/monsters/anjanath.png',
    healthPoint: 0,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      3: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },
  rathalos: {
    name: 'Rathalos',
    icon: './assets/monsters/rathalos.png',
    healthPoint: 0,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 80,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      4: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },
  rathalosvariant: {
    name: 'Azure Rathalos',
    icon: './assets/monsters/rathalosVariant.png',
    healthPoint: 65,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      4: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },

};

const wilspireDesertCoreMonsterList:MonsterList = {
  barroth: {
    name: 'Barroth',
    icon: './assets/monsters/barroth.png',
    healthPoint: 65,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      3: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },
  jyuratodus: {
    name: 'Jyuratodus',
    icon: './assets/monsters/jyuratodus.png',
    healthPoint: 65,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      3: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },
  pukeipukei: {
    name: 'Pukei Pukei',
    icon: './assets/monsters/pukeiPukei.png',
    healthPoint: 65,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      3: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },
  diablos: {
    name: 'Diablos',
    icon: './assets/monsters/diablos.png',
    healthPoint: 65,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 80,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      3: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },
  diablosvariant: {
    name: 'Black Diablos',
    icon: './assets/monsters/diablosVariant.png',
    healthPoint: 65,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      4: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },

};

const kuluYaKuExpansionMonsterList:MonsterList = {
  kuluyaku: {
    name: 'Kulu Ya Ku',
    icon: './assets/monsters/kuluYaKu.png',
    healthPoint: 65,
    rank: {
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      3: {
        stars: 3,
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
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      5: {
        stars: 3,
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
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      5: {
        stars: 3,
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
      1: {
        stars: 1,
        maxHealthPoint: 65,
      },
      2: {
        stars: 2,
        maxHealthPoint: 65,
      },
      5: {
        stars: 3,
        maxHealthPoint: 65,
      },
    },
  },
};

export {
  ancientForestCoreMonsterList,
  wilspireDesertCoreMonsterList,
  kuluYaKuExpansionMonsterList,
  kusharadaoraExpansionMonsterList,
  teostraExpansionMonsterList,
  nergiganteExpansionMonsterList,
};
