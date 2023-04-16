import Monster from '@/scripts/MonsterController';
import { setActivePinia, createPinia } from 'pinia';
import Sinon from 'sinon';
import MHWBGStore from '@/store/Store';

describe('Create new Monster', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
    const store = MHWBGStore();
    store.updateExpansions('AncientForestCore', true);
  });
  afterEach(() => {
    Sinon.restore();
  });

  it('new Monster', () => {
    const monster = new Monster({ name: 'rathalos', monsterRank: 1 });

    expect(monster).toEqual({
      name: 'Rathalos',
      icon: './assets/monsters/rathalos.png',
      healthPoint: 80,
      rank: {
        1: {
          stars: 1,
          maxHealthPoint: 80,
        },
        2: {
          stars: 2,
          maxHealthPoint: 85,
        },
        4: {
          stars: 3,
          maxHealthPoint: 90,
        },
      },
    });
  });
});
