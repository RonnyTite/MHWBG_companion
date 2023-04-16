// Hunter
export interface ArmorPiece {
  name: string
  type: string
  rarity: number
  description?: string
}
// eslint-disable-next-line max-len
export type WeaponAbbreviation = 'bow' | 'charge_blade' | 'ds' | 'gs' | 'gunlance' | 'hammer' | 'hbg' | 'hh' | 'insect_glaive' | 'lance' | 'lbg' | 'ls' | 'sns' | 'switch_axe';
// eslint-disable-next-line max-len
export type WeaponType = 'Bow' | 'Charge Blade' | 'Dual Blades' | 'Great Sword' | 'Gunlance' | 'Hammer' | 'Heavy Bowgun' | 'Hunting Horn' | 'Insect Glaive' | 'Lance' | 'Light Bowgun' | 'Long Sword' | 'Sword and Shield' | 'Switch Axe';
export interface Weapon {
  name: string
  weaponType: WeaponType
  abbreviation: WeaponAbbreviation
  rarity: number
  description?: string
}

export interface Equipment {
  weapon: Weapon
  head: ArmorPiece
  torso: ArmorPiece
  legs: ArmorPiece
}
export interface Hunter {
  name: string
  healthPoint: number
  maxHealthPoint: 8
  equipment?: {
    head: Equipment
    torso: Equipment
    legs: Equipment
  },
  inventory: Chest | Record<string, never>

}
export interface Item {
  name: string
  type: number
  icon: string
  rarity: number
  quantity: number
  description?: string
}
export interface Chest {
  [x: string]: Item | Equipment | Potion
}
export interface Potions {
  quantity: number
}

// Game
export interface Game {
  huntersList: Array<Hunter>
  monsterList: Monster
  inventory: Array<Item>
  potions: Potions
}
export interface Campaign extends Game {
  expansions:IncludedExpansions
  name?:string
}

// Monsters
interface MonsterList {
  [x:string]: Monster
}

interface MonsterRank {
  stars: number
  maxHealthPoint: number
}

export interface Monster {
  name: string
  icon: string
  healthPoint: number
  rank: Record<number, MonsterRank>
  parts?: MonsterParts
}
export interface MonsterParts {
  [x:number]: string
}

// Expansions
// eslint-disable-next-line max-len
export type ExpansionsName = 'AncientForestCore' | 'WilspireDesertCore' | 'TeostraExpansion' | 'NergiganteExpansion' | 'KusharadaoraExpansion' | 'KuluYaKuExpansion';
export interface IncludedExpansions {
  AncientForestCore: ExpansionInterface
  WilspireDesertCore: ExpansionInterface
  TeostraExpansion: ExpansionInterface
  NergiganteExpansion: ExpansionInterface
  KusharadaoraExpansion: ExpansionInterface
  KuluYaKuExpansion: ExpansionInterface
}
export interface ExpansionInterface {
  include: boolean,
  name : string
}
export interface AncientForestCoreMonsterList {
  jagras: {
    name: 'Jagras',
    icon: './assets/monsters/jagras.png',
    rank:{
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
      }, }
  },
  tobiKadachi: {
    name: 'Tobi Kadachi',
    icon: './assets/monsters/tobiKadachi.png',
    rank:{
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
      }, }
  },
  anjanath: {
    name: 'Anjanath',
    icon: './assets/monsters/anjanath.png',
    rank:{
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
      }, }
  },
  rathalos: {
    name: 'Rathalos',
    icon: './assets/monsters/rathalos.png',
    rank:{
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
      }, }
  },
  rathalosVariant: {
    name: 'Azure Rathalos',
    icon: './assets/monsters/rathalosVariant.png',
    rank:{
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
      }, }
  },

}
export interface WilspireDesertCoreMonsterList {
  barroth: {
    name: 'barroth',
    icon: './assets/monsters/barroth.png',
    rank:{
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
      }, }
  },
  jyuratodus: {
    name: 'Jyuratodus',
    icon: './assets/monsters/jyuratodus.png',
    rank:{
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
      }, }
  },
  pukeiPukei: {
    name: 'Pukei Pukei',
    icon: './assets/monsters/pukeiPukei.png',
    rank:{
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
      }, }
  },
  diablos: {
    name: 'Diablos',
    icon: './assets/monsters/diablos.png',
    rank:{
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
      }, }
  },
  diablosVariant: {
    name: 'Black Diablos',
    icon: './assets/monsters/diablosVariant.png',
    rank:{
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
      }, }
  },

}
export interface KuluYaKuExpansionMonsterList {
  kuluYaKu: {
    name: 'Kulu Ya Ku',
    icon: './assets/monsters/kuluYaKu.png',
    rank:{
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
      }, }
  },
}
export interface KusharadaoraExpanngsionMonsterList {
  kusharadaora: {
    name: 'Kusharadaora',
    icon: './assets/monsters/kusharadaora.png',
    rank:{
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
      }, }
  },
}
export interface TeostraExpansionMonsterList {
  teostra: {
    name: 'Teostra',
    icon: './assets/monsters/teostra.png',
    rank:{
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
      }, }
  },
}
export interface NergiganteExpansionMonsterList {
  nergigante: {
    name: 'Nergigante',
    icon: './assets/monsters/nergigante.png',
    rank:{
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
      }, }
  },
}
