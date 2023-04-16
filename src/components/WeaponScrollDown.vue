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
      >
        <IonImg
          class="rank-img"
          :src="`./assets/rank/${stars}_stars.png`"
        />
      </span>
    </div>
    <div>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="wyvern"
            placeholder="Select Wyvern"
            class="monster-selector"
            :disabled="rank === 0"
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
  IonItem, IonList, IonSelect, IonSelectOption, IonImg,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import MHWBGStore from '../store/Store';

export default defineComponent({
  components: {
    IonItem, IonList, IonSelect, IonSelectOption, IonImg,
  },
  emits: ['monster-selected'],
  data() {
    return {
      type: null as string | null,
      weapon: null as Weapon | null,
    };
  },
  computed: {
    weaponList() {
      const store = MHWBGStore();
      return Object.entries(store.weapons);
    },
    constructList() {
      return [].sort(); // sort by rarity
    },
  },
  mounted() {
    this.setActiveRank();
  },
  methods: {
    selectType($event: MouseEvent): void {
      const el = $event.target as HTMLButtonElement;
      if (el) {
        const wpn = el.getAttribute('data-weapon') || 'sns';
        this.type = wpn;
        this.emitSelection();
      }
    },
    emitSelection($event: CustomEvent): void {
      const { value } = $event.detail;
      this.$emit('weapon-selected', { name: value, type: this.type, rarity: this.weapon.rarity });
    },

  },
});
</script>
  <style>
  .rank-list {
    font-size: 30px;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: row;
  }

  .rank-item {
    cursor: pointer;
    opacity: 0.4;
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }

  .rank-img {
    width: 100%;
    height: 100%;
    padding: 2px;
    pointer-events: none;
  }

  .rank-item.active {
    opacity: 1;
    display: inline-block;
    line-height: 40px;
  }
  </style>
