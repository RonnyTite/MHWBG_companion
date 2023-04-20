// https://pinia.vuejs.org/cookbook/testing.html#unit-testing-a-store
import { setActivePinia, createPinia } from 'pinia';
import Sinon from 'sinon';
import MHWBGStore from '@/store/Store';

describe('Test Pinia Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
    Sinon.stub(console, 'debug');
  });
  afterEach(() => {
    Sinon.restore();
  });

  it('Initial mount', () => {
    const store = MHWBGStore();
    expect(store.currentGame).toEqual({});
    expect(store.monsters).toEqual({});
    expect(store.expansions).toEqual({
      AncientForestCore: { include: true, name: 'Ancien Forest' },
      WilspireDesertCore: { include: false, name: 'Wildspire' },
      TeostraExpansion: { include: false, name: 'Teostra' },
      NergiganteExpansion: { include: false, name: 'Nergigante' },
      KusharadaoraExpansion: { include: false, name: 'Kusharadaora' },
      KuluYaKuExpansion: { include: false, name: 'Kulu Ya Ku' },
    });
  });
});

describe('store - Actions', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
    Sinon.stub(console, 'debug');
  });
  afterEach(() => {
    Sinon.restore();
  });
  it('updateExpansions', () => {
    const store = MHWBGStore();
    Sinon.stub(store, 'enableExpansions');
    store.updateExpansions('WilspireDesertCore', true);
    expect(store.expansions).toEqual({
      AncientForestCore: { include: true, name: 'Ancien Forest' },
      WilspireDesertCore: { include: true, name: 'Wildspire' },
      TeostraExpansion: { include: false, name: 'Teostra' },
      NergiganteExpansion: { include: false, name: 'Nergigante' },
      KusharadaoraExpansion: { include: false, name: 'Kusharadaora' },
      KuluYaKuExpansion: { include: false, name: 'Kulu Ya Ku' },
      HunterArsenalExpansion: { include: false, name: 'Hunter Arsenal' },
    });
  });

  describe('enableExpansions', () => {
    const initialExpansion = [
      'jagras', // Ancient Forest
      'tobikadachi', // Ancient Forest
      'anjanath', // Ancient Forest
      'rathalos', // Ancient Forest
      'rathalosvariant', // Ancient Forest
    ];

    it('enableExpansions - AncientForestCore', () => {
      const store = MHWBGStore();
      const spy = Sinon.spy(store, 'addAncientForestCoreMonsterList');
      store.enableExpansions();
      expect(Object.keys(store.monsters)).toEqual(initialExpansion);
      // eslint-disable-next-line max-len
      expect(Object.keys(store.equipment)).toEqual(['bow', 'charge_blade', 'ds', 'gs', 'gunlance', 'hammer', 'hbg', 'hh', 'insect_glaive', 'lance', 'lbg', 'ls', 'sns', 'switch_axe', 'head', 'torso', 'legs']);
      Sinon.assert.calledOnce(spy);
    });

    it('enableExpansions - WilspireDesertCore', () => {
      const store = MHWBGStore();
      store.updateExpansions('WilspireDesertCore', true);
      const spy = Sinon.spy(store, 'addWilspireDesertCoreMonsterList');
      store.enableExpansions();
      expect(Object.keys(store.monsters)).toEqual([
        'barroth', // Wildspire
        'jyuratodus', // Wildspire
        'pukeipukei', // Wildspire
        'diablos', // Wildspire
        'diablosvariant', // Wildspire
        ...initialExpansion,
      ]);
      Sinon.assert.calledOnce(spy);
    });

    it('enableExpansions - Kusharadaora', () => {
      const store = MHWBGStore();
      store.updateExpansions('KusharadaoraExpansion', true);
      const spy = Sinon.spy(store, 'addKusharadaoraExpansionMonsterList');
      store.enableExpansions();
      expect(Object.keys(store.monsters)).toEqual([
        'kusharadaora', // Kusharadaora
        ...initialExpansion,
      ]);
      Sinon.assert.calledOnce(spy);
    });

    it('enableExpansions - Teostra', () => {
      const store = MHWBGStore();
      store.updateExpansions('TeostraExpansion', true);
      const spy = Sinon.spy(store, 'addTeostraExpansionMonsterList');
      store.enableExpansions();
      expect(Object.keys(store.monsters)).toEqual([
        'teostra', // Teostra
        ...initialExpansion,
      ]);
      Sinon.assert.calledOnce(spy);
    });

    it('enableExpansions - KuluYaKu', () => {
      const store = MHWBGStore();
      store.updateExpansions('KuluYaKuExpansion', true);
      const spy = Sinon.spy(store, 'addKuluYaKuExpansionMonsterList');
      store.enableExpansions();
      expect(Object.keys(store.monsters)).toEqual([
        'kuluyaku', // Kuluyaku
        ...initialExpansion,
      ]);
      Sinon.assert.calledOnce(spy);
    });

    it('enableExpansions - Nergigante', () => {
      const store = MHWBGStore();
      store.updateExpansions('NergiganteExpansion', true);
      const spy = Sinon.spy(store, 'addNergiganteExpansionMonsterList');
      store.enableExpansions();
      expect(Object.keys(store.monsters)).toEqual([
        'nergigante', // Nergigante
        ...initialExpansion,
      ]);
      Sinon.assert.calledOnce(spy);
    });

    it('enableExpansions - Hunter Arsenal', () => {
      const store = MHWBGStore();
      store.updateExpansions('HunterArsenalExpansion', true);
      const spy = Sinon.spy(store, 'addHunterArsenalExpansionMonsterList');
      store.enableExpansions();
      expect(Object.keys(store.monsters)).toEqual([
        ...initialExpansion, // Hunter Arsenal has no monsters
      ]);
      Sinon.assert.calledOnce(spy);
    });

    it('enable 2 Expansions - Nergigante & Teostra - ', () => {
      const store = MHWBGStore();
      store.updateExpansions('NergiganteExpansion', true);
      store.updateExpansions('TeostraExpansion', true);
      const spyTeostra = Sinon.spy(store, 'addTeostraExpansionMonsterList');
      const spyNergigante = Sinon.spy(store, 'addNergiganteExpansionMonsterList');
      store.enableExpansions();
      expect(Object.keys(store.monsters)).toEqual([
        'nergigante', // Nergigante
        'teostra', // Teostra
        ...initialExpansion,
      ]);
      Sinon.assert.calledOnce(spyTeostra);
      Sinon.assert.calledOnce(spyNergigante);
    });
  });
});
