import Campaign from '@/scripts/CampaignController';
import Monster from '@/scripts/MonsterController';
import Hunter from '@/scripts/HunterController';
import {
  ancientForestCoreMonsterList,
  teostraExpansionMonsterList,
} from '@/staticDB/Expansions';
import { setActivePinia, createPinia } from 'pinia';
import Sinon from 'sinon';

describe('Create new Campaign', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });
  afterEach(() => {
    Sinon.restore();
  });

  it('new Campaign', () => {
    const hunter1 = new Hunter({ name: 'Test' });
    const campaign = new Campaign({
      name: 'test campaign',
      hunters: [hunter1],
      expansions: {
        AncientForestCore: { include: true, name: 'Ancien Forest' },
        WilspireDesertCore: { include: false, name: 'Wildspire' },
        TeostraExpansion: { include: true, name: 'Teostra' },
        NergiganteExpansion: { include: false, name: 'Nergigante' },
        KusharadaoraExpansion: { include: false, name: 'Kusharadaora' },
        KuluYaKuExpansion: { include: false, name: 'Kulu Ya Ku' },
      },
    });

    expect(campaign).toEqual({
      name: 'test campaign',
      huntersList: [
        hunter1,
      ],
      monsterList: {
        ...ancientForestCoreMonsterList,
        ...teostraExpansionMonsterList,
      },
      potions: { quantity: 2 },
      inventory: [],
      expansions: {
        AncientForestCore: { include: true, name: 'Ancien Forest' },
        WilspireDesertCore: { include: false, name: 'Wildspire' },
        TeostraExpansion: { include: true, name: 'Teostra' },
        NergiganteExpansion: { include: false, name: 'Nergigante' },
        KusharadaoraExpansion: { include: false, name: 'Kusharadaora' },
        KuluYaKuExpansion: { include: false, name: 'Kulu Ya Ku' },
      },
    });
  });
});
