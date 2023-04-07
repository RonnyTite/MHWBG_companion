import Monster from '@/scripts/MonsterController';
import { setActivePinia, createPinia } from 'pinia';
import Sinon from 'sinon';

describe('Create new Monster', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });
  afterEach(() => {
    Sinon.restore();
  });

  it('new Hunter', () => {
    const monster = new Monster({ name: 'rathalos', monsterRank: 1 });

    expect(monster).toEqual({
      name: 'Rathalos',
      icon: './assets/monsters/rathalos.png',
      healthPoint: 80,
      rank: {
        stars: 1,
        maxHealthPoint: 80,
      },
    });
  });
});
