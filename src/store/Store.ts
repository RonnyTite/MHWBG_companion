import { defineStore } from 'pinia';
import { Game } from '@/types/Store.d';

// https://pinia.vuejs.org/core-concepts/
interface MHWBGStore {
  currentGame: Game | Record<string, never>
}

export default defineStore('MHWBG_Store', {
  state: ():MHWBGStore => ({
    currentGame: {},
  }),
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'MHWBG_companion',
        storage: localStorage,
      },
    ],
  },
});
