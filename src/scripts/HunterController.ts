import {
  Chest, Hunter as HunterInterface, Potions,
} from '../types/app.d';

export default class Hunter {
  name:string;

  healthPoint = 8;

  readonly maxHealthPoint = 8;

  equipment?:HunterInterface['equipment'];

  static potions : Potions;

  inventory:Chest = {};

  constructor({ name, equipment }:{ name:HunterInterface['name'], equipment?:HunterInterface['equipment'] }) {
    this.name = name;
    this.equipment = equipment;
  }
}
