export interface ArmorPiece {
  name: string
  type: number
  rarity: number
}

export interface Equipment {
  head: ArmorPiece
  torso: ArmorPiece
  head: ArmorPiece
  description?: string
}

export interface Monster {
  name: string
  health_point: number
  rank: number
}

export interface Hunter {
  name: string
  health_point: number
  equipment: Equipment
}

export interface Item {
  name: string
  type: number
  rarity: number
  quantity: number
  description?: string
}

export interface Game {
  hunters: Array<Hunter>
  monster: Monster
  inventory: Array<Item>
}
