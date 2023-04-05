// https://pinia.vuejs.org/cookbook/testing.html#unit-testing-a-store
import { setActivePinia, createPinia } from 'pinia';
import Sinon from 'sinon';

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
});
