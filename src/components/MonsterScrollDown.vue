<template>
  <div>
    <div class="text__monster rank-list">
      <span
        data-rank="1"
        class="rank-item"
        @click="selectRank"
      >1</span>
      <span
        data-rank="2"
        class="rank-item"
        @click="selectRank"
      >2</span>
      <span
        data-rank="3"
        class="rank-item"
        @click="selectRank"
      >3</span>
    </div>
    <div>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="wyvern"
            placeholder="Select Wyvern"
            @ion-change="emitSelection"
          >
            <ion-select-option
              v-for="(monster, index) in monsters"
              :key="index"
              :value="monster.name"
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
import { Monster } from '../types/app.d';

export default defineComponent({
  components: {
    IonItem, IonList, IonSelect, IonSelectOption,
  },
  emits: ['monster-selected'],
  data() {
    return {
      monsters: [] as Array<Monster>,
      rank: 1 as number,
    };
  },
  computed: {

  },
  beforeMount() {
    const store = MHWBGStore();
    this.monsters = Object.values(store.monsters);
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
