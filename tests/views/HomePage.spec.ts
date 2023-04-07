// https://pinia.vuejs.org/cookbook/testing.html#unit-testing-a-store
import { setActivePinia, createPinia } from 'pinia';
import Sinon from 'sinon';
import { shallowMount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';

describe('Test Pinia Store', () => {
  let wrapper:any;
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
    Sinon.stub(console, 'debug');

    wrapper = shallowMount(HomePage);
  });
  afterEach(() => {
    Sinon.restore();
  });
});
