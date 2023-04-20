<template>
  <div>
    <div>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="weapon"
            placeholder="Select Weapon"
            class="wpn-selector"
            @ion-change="emitSelection"
          >
            <ion-select-option
              v-for="(weapon, index) in weaponList"
              :key="index"
              :value="weapon"
            >
              {{ weapon.name }}
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
import { Weapon } from '@/types/app';
import MHWBGStore from '../store/Store';

export default defineComponent({
  components: {
    IonItem, IonList, IonSelect, IonSelectOption,
  },
  emits: ['weapon-selected'],
  data() {
    return {
      type: null as string | null,
      weapon: null as Weapon | null,
    };
  },
  computed: {
    weaponList() {
      const store = MHWBGStore();
      return store.equipment.weapons;
    },
    constructList() {
      return [].sort(); // sort by rarity
    },
  },
  methods: {
    emitSelection($event: CustomEvent): void {
      const { value } = $event.detail;
      this.$emit('weapon-selected', value);
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
