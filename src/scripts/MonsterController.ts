import {
  Monster, MonsterRank,
} from '../types/app';

import MHWBGStore from '../store/Store';

function fetchMonsterProperties(name:Monster['name']):Monster {
  const store = MHWBGStore();
  return store.monsters[name];
}

export default class MonsterController {
  name:string;

  icon:string;

  healthPoint:number;

  rank:Record<number, MonsterRank>;

  constructor({ name, monsterRank }:{ name:Monster['name'], monsterRank:number }) {
    this.name = name;

    const wyvern = fetchMonsterProperties(name);
    const { maxHealthPoint } = wyvern.rank[monsterRank - 1];

    this.name = wyvern.name;
    this.icon = wyvern.icon;
    this.healthPoint = maxHealthPoint;
    this.rank = wyvern.rank;
  }
}
