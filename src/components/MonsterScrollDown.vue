<template>
  <div>
    <div class="text__monster rank-list">
      Rank:
      <span
        v-for="(stars, key) in constructRank"
        :key="key"
        :data-rank="stars"
        class="rank-item"
        @click="selectRank"
      >{{ stars }}</span>
    </div>
    <div>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="wyvern"
            placeholder="Select Wyvern"
            class="monster-selector"
            :disabled="rank ===0"
            @ion-change="emitSelection"
          >
            <ion-select-option
              v-for="([monsterKeyName, monster], index) in monstersList"
              :key="index"
              :value="monsterKeyName"
              :disabled="!Object.keys(monster.rank).includes(rank.toString())"
            >
              {{ monster.name }}
            </ion-select-option>
          </IonSelect>
        </IonItem>
      </IonList>
    </div>
  </div>
</template>

<script lang="ts">
import {
  IonItem, IonList, IonSelect, IonSelectOption,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import MHWBGStore from '../store/Store';

export default defineComponent({
  components: {
    IonItem, IonList, IonSelect, IonSelectOption,
  },
  emits: ['monster-selected'],
  data() {
    return {
      rank: 0 as number,
    };
  },
  computed: {
    monstersList() {
      const store = MHWBGStore();
      console.debug('monstersList', store.monsters);
      return Object.entries(store.monsters);
    },
    constructRank():Array<number> {
      const ranks:Array<number> = [];

      this.monstersList.forEach(([, monster]) => {
        const keys = Object.keys(monster.rank);
        keys.forEach((index) => {
          ranks.push(parseInt(index, 10));
        });
      });
      return [...new Set(ranks)];
    },
  },
  mounted() {
    this.setActiveRank();
  },
  methods: {
    selectRank($event: MouseEvent):void {
      const el = $event.target as HTMLButtonElement;
      if (el) {
        const rank = el.getAttribute('data-rank') || '1';
        this.rank = parseInt(rank, 10);
        this.setActiveRank();
      }
    },
    emitSelection($event:CustomEvent):void {
      const { value } = $event.detail;
      this.$emit('monster-selected', { name: value, rank: this.rank });
    },
    setActiveRank() {
      const currentActive = document.querySelector('.active');
      if (currentActive) { currentActive.classList.remove('active'); }

      const nextActiveRank = document.querySelector(`[data-rank="${this.rank}"]`);
      if (nextActiveRank) { nextActiveRank.classList.add('active'); }
    },
  },
});
</script>
<style>
.rank-list {
    font-size: 40px;
}

.rank-item {
    cursor: pointer;
    margin: 0 10px
}

.rank-item.active {
    border-radius: 100%;
    border-color: red;
    border-width: 1px;
    border-style: solid;
    width: 50px;
    height: 50px;
    display: inline-block;
    line-height: 50px;
}
</style>
