import {
  Monster, Hunter, Potions, Chest, IncludedExpansions,
} from '../types/app';
import GameController from './GameController';

export default class Campaign {
  name = '';

  huntersList: Array<Hunter>;

  monsterList: Record<string, Monster>;

  potions: Potions = { quantity: 2 };

  inventory:Chest = [];

  expansions: IncludedExpansions;

  constructor({
    name, hunters, monsters, expansions,
  }:{
    name:string, hunters:Array<Hunter>, monsters:Record<string, Monster>, expansions:IncludedExpansions,
  }) {
    const game = new GameController({ hunters, monsters });
    this.name = name;
    this.huntersList = game.huntersList;
    this.monsterList = game.monsterList;
    this.potions = game.potions;
    this.inventory = game.inventory;
    this.expansions = expansions;
  }
}
