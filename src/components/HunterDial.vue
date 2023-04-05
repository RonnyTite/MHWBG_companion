<template>
  <div>
    <div> HP </div>
    <div class="dial-container">
      <div>
        <ion-button @click="increaseHP">
          -
        </ion-button>
      </div>
      <div class="ion-margin-horizontal">
       {{ hunter.name }} {{ hunter.healthPoint }}
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
import { IonButton } from '@ionic/vue';
import { Hunter } from '../types/app.d';

export default defineComponent({
  components: {
    IonButton,
  },
  emits: ['createHunter'],
  data() {
    return {
      hunter: {
        healthPoint: 8,
        maxHealthPoint: 8,
      } as unknown as Hunter,
    };
  },
  mounted() {
    this.createHunter();
  },
  methods: {
    increaseHP() {
      if (this.hunter.healthPoint === 0) {
        return;
      }
      this.hunter.healthPoint -= 1;
      if (this.hunter.healthPoint === 0) {
        // DISPLAY CARTED
      }
    },
    decreaseHP() {
      if (this.hunter.healthPoint >= this.hunter.maxHealthPoint) {
        return;
      }
      this.hunter.healthPoint += 1;
    },
    createHunter() {
      this.$emit('createHunter');
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
 </style>
