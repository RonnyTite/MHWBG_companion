import { ArmorPiece } from '@/types/app.d';

interface ArmorList {
  [x: string]: Array<ArmorPiece>
}

const coreArmorList: ArmorList = {
  head: [
    {
      name: '',
      type: '',
      rarity: 1,
      description: '',
      armorValue: 0,
    }],
  torso: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
  legs: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
};

const kuluYaKuExpansionArmorList: ArmorList = {
  head: [
    {
      name: '',
      type: '',
      rarity: 1,
      description: '',
      armorValue: 0,
    }],
  torso: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
  legs: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
};

const kusharadaoraExpansionArmorList: ArmorList = {
  head: [
    {
      name: '',
      type: '',
      rarity: 1,
      description: '',
      armorValue: 0,
    }],
  torso: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
  legs: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
};

const teostraExpansionArmorList: ArmorList = {
  head: [
    {
      name: '',
      type: '',
      rarity: 1,
      description: '',
      armorValue: 0,
    }],
  torso: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
  legs: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
};

const nergiganteExpansionArmorList: ArmorList = {
  head: [
    {
      name: '',
      type: '',
      rarity: 1,
      description: '',
      armorValue: 0,
    }],
  torso: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
  legs: [{
    name: '',
    type: '',
    rarity: 1,
    description: '',
    armorValue: 0,
  }],
};

const hunterArsenalExpansionArmorList: ArmorList = {
  head: [
    {
      name: '',
      type: '',
      rarity: 1,
      description: '',
      armorValue: 0,
    }, {
      name: 'Chainmail Headgear',
      type: 'ls',
      rarity: 0,
      description: '',
      armorValue: 1,
    },
  ],
  torso: [
    {
      name: '',
      type: '',
      rarity: 1,
      description: '',
      armorValue: 0,
    }, {
      name: 'Chainmail Vest',
      type: 'ls',
      rarity: 1,
      description: '',
      armorValue: 0,
    },
  ],
  legs: [
    {
      name: '',
      type: '',
      rarity: 1,
      description: '',
      armorValue: 0,
    }, {
      name: 'Chainmail Trousers',
      type: '',
      rarity: 1,
      description: '',
      armorValue: 1,
    },
  ],
};

export {
  coreArmorList,
  kuluYaKuExpansionArmorList,
  kusharadaoraExpansionArmorList,
  teostraExpansionArmorList,
  nergiganteExpansionArmorList,
  hunterArsenalExpansionArmorList,
};
