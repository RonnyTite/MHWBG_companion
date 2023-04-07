import Sinon from 'sinon';
import MonsterScrollDown from '@/components/MonsterScrollDown.vue';

describe('Monster scroll down', () => {
  it('emitSelection', async () => {
    const context = {
      rank: 2,
      $emit: Sinon.spy(),
    };
    if (MonsterScrollDown.methods) {
      const $event = {
        detail: {
          value: 'rathalos',
        },
      };
      const { emitSelection } = MonsterScrollDown.methods;
      expect(emitSelection.call(context, $event));
      Sinon.assert.calledOnceWithExactly(context.$emit, 'monster-selected', { name: 'rathalos', rank: 2 });
    }
  });
});
