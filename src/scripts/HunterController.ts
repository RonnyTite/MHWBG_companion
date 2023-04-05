import {
  Chest, Hunter,
} from '../types/app.d';

export default class HunterController {
  name:string;

  healthPoint = 8;

  readonly maxHealthPoint = 8;

  equipment:Hunter['equipment'];

  inventory: { bag?:Chest } = {
    bag: undefined,
  };

  constructor({ name, equipment }:{ name:Hunter['name'], equipment:Hunter['equipment'] }) {
    this.name = name;
    this.equipment = equipment;
  }
}
