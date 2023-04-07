import Hunter from '@/scripts/HunterController';

describe('Create new Hunter', () => {
  it('new Hunter', () => {
    const hunter = new Hunter({ name: 'Unit Test' });

    expect(hunter).toEqual({
      name: 'Unit Test',
      healthPoint: 8,
      maxHealthPoint: 8,
      equipment: undefined,
      inventory: {},
    });
  });
});
