// https://pinia.vuejs.org/cookbook/testing.html#unit-testing-a-store
import { setActivePinia, createPinia } from 'pinia';
import Sinon from 'sinon';
import { mount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';
import MHWBGStore from '@/store/Store';

describe('Test Pinia Store', () => {
  let wrapper:any;
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
    Sinon.stub(console, 'debug');
    const store = MHWBGStore();
    store.updateExpansions('AncientForestCore', true);
    wrapper = mount(HomePage);
  });
  afterEach(() => {
    Sinon.restore();
  });
  it('should remove monster', async () => {
    await wrapper.setData({
      monsterProperties: {
        name: 'rathalos',
        rank: 1,
      },
    });
    expect(wrapper.vm.monsterProperties).toEqual({
      name: 'rathalos',
      rank: 1,
    });
    wrapper.vm.removeMonster();

    expect(wrapper.vm.monsterProperties).toEqual({
      name: '',
      rank: 0,
    });
  });
});
