import {
  Monster, Hunter, Potions, Chest,
} from '../types/app';

export default class Campaign {
  huntersList: Array<Hunter>;

  monsterList: Record<string, Monster>;

  potions: Potions = { quantity: 2 };

  inventory:Chest = [];

  constructor({
    hunters, monsters,
  }:{
    hunters:Array<Hunter>, monsters:Record<string, Monster>
  }) {
    this.huntersList = hunters;
    this.monsterList = monsters;
  }
}
