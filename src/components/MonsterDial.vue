<template>
  <div>
    <div> {{ monster.name }} HP </div>
    <IonImg
      class="monster-img"
      :src="monster.icon"
    />
    <div class="dial-container">
      <div>
        <ion-button @click="increaseHP">
          -
        </ion-button>
      </div>
      <div class="ion-margin-horizontal text__monster health_point">
        {{ monster.healthPoint }}
      </div>
      <div>
        <ion-button @click="decreaseHP">
          +
        </ion-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IonButton, IonImg } from '@ionic/vue';
import { Monster } from '../types/app.d';
import MonsterController from '../scripts/MonsterController';

export default defineComponent({
  components: {
    IonButton,
    IonImg,
  },
  props: {
    monsterProperties: {
      type: Object as PropType<{
        name: string,
        rank: number,
      }>,
      required: true,
    },
  },
  data() {
    return {
      monster: {} as Monster,
      monsterRank: 1 as number,
    };
  },
  beforeMount() {
    debugger;
    const { name, rank } = this.monsterProperties;
    this.monster = new MonsterController({ name, monsterRank: rank });
  },
  methods: {
    increaseHP() {
      if (this.monster.healthPoint === 0) {
        return;
      }
      this.monster.healthPoint -= 1;
      if (this.monster.healthPoint === 0) {
        // DISPLAY CARTED
      }
    },
    decreaseHP() {
      if (this.monster.healthPoint >= this.monster.rank[this.monsterProperties.rank].maxHealthPoint) {
        return;
      }
      this.monster.healthPoint += 1;
    },
  },

});
</script>

 <style scoped>
 .dial-container {
     display: flex;
     flex-direction: row;
     flex-wrap: nowrap;
     align-content: center;
     justify-content: center;
     align-items: center;
 }
 .monster-img{
  width: 50px;
  height: 50px;
  display: block;
  margin: auto;
 }
 .health_point {
  font-size: 80px;;
 }
 </style>
