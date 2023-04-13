// https://pinia.vuejs.org/cookbook/testing.html#unit-testing-a-store
import { setActivePinia, createPinia } from 'pinia';
import Sinon from 'sinon';
import { mount } from '@vue/test-utils';
import MonsterDial from '@/components/MonsterDial.vue';
import MHWBGStore from '@/store/Store';

describe('Mosnter Dial ', () => {
  let wrapper:any;
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
    const store = MHWBGStore();
    store.updateExpansions('AncientForestCore', true);
    wrapper = mount(MonsterDial, {
      props: {
        monsterProperties: {
          name: 'rathalos',
          rank: 1,
        },
      },
    });
    wrapper.vm.initPage();
  });
  afterEach(() => {
    wrapper.unmount();
    Sinon.restore();
  });

  it('should mount', () => {
    expect(wrapper.vm.monster).toEqual({
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
          maxHealthPoint: 65,
        },
        4: {
          stars: 3,
          maxHealthPoint: 65,
        },
      },
    });
  });

  it('should NOT increase when at max health', () => {
    expect(wrapper.vm.monster.healthPoint).toEqual(80);
    wrapper.vm.increaseHP();
    expect(wrapper.vm.monster.healthPoint).toEqual(80);
  });

  it('should increase health', async () => {
    await wrapper.setData({
      monster: {
        healthPoint: 67,
        ...wrapper.vm.MonsterScrollDown,
      },
    });
    expect(wrapper.vm.monster.healthPoint).toEqual(67);
    wrapper.vm.increaseHP();
    expect(wrapper.vm.monster.healthPoint).toEqual(68);
  });

  it('should NOT decrease when at low health', async () => {
    await wrapper.setData({
      monster: {
        healthPoint: 67,
        ...wrapper.vm.MonsterScrollDown,
      },
    });
    expect(wrapper.vm.monster.healthPoint).toEqual(67);
    wrapper.vm.decreaseHP();
    expect(wrapper.vm.monster.healthPoint).toEqual(66);
  });

  it('should decrease health', async () => {
    expect(wrapper.vm.monster.healthPoint).toEqual(80);
    wrapper.vm.decreaseHP();
    expect(wrapper.vm.monster.healthPoint).toEqual(79);
  });
});
