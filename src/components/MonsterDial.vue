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
      <div class="ion-margin-horizontal">
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
import { defineComponent } from 'vue';
import { IonButton, IonImg } from '@ionic/vue';
import { Monster } from '../types/app.d';
import MonsterController from '../scripts/MonsterController';

export default defineComponent({
  components: {
    IonButton,
    IonImg,
  },
  data() {
    return {
      monster: {} as Monster,
      monsterRank: 1 as number,
    };
  },
  beforeMount() {
    this.monster = new MonsterController({ name: 'anjanath', monsterRank: this.monsterRank });
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
      if (this.monster.healthPoint >= this.monster.rank[this.monsterRank].maxHealthPoint) {
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
 </style>
