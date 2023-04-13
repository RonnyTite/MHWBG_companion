import {
  Monster as MonsterInterface, MonsterRank,
} from '../types/app';

import MHWBGStore from '../store/Store';

function fetchMonsterProperties(name:MonsterInterface['name']):MonsterInterface {
  const store = MHWBGStore();
  return store.monsters[name];
}

export default class Monster {
  name:string;

  icon:string;

  healthPoint:number;

  rank:Record<number, MonsterRank>;

  constructor({ name, monsterRank }:{ name:MonsterInterface['name'], monsterRank:number }) {
    this.name = name;

    const wyvern = fetchMonsterProperties(name.toLowerCase());
    const { maxHealthPoint } = wyvern.rank[monsterRank];

    this.name = wyvern.name;
    this.icon = wyvern.icon;
    this.healthPoint = maxHealthPoint;
    this.rank = wyvern.rank;
  }
}
