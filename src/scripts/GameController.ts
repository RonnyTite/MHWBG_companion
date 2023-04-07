import {
  Monster, Hunter, Potions, Chest, ExpansionsName, ExpansionInterface,
} from '../types/app';
import MHWBGStore from '../store/Store';

function enableExpansions(expansions:Record<ExpansionsName, ExpansionInterface>) {
  const store = MHWBGStore();
  Object.entries(expansions).forEach(([expansionKey, expansion]) => {
    if (expansion.include) {
      store.updateExpansions(expansionKey as ExpansionsName, expansion.include);
    }
  });
}

export default class Campaign {
  huntersList: Array<Hunter>;

  monsterList: Record<string, Monster>;

  potions: Potions = { quantity: 2 };

  inventory:Chest = [];

  constructor({
    hunters, expansions,
  }:{
    hunters:Array<Hunter>,
    expansions:Record<ExpansionsName, ExpansionInterface>
  }) {
    const store = MHWBGStore();
    enableExpansions(expansions);
    this.huntersList = hunters;
    this.monsterList = store.monsters;
  }
}
