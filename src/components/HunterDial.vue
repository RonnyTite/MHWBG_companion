<template>
  <div>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle> {{ hunter.name }} HP </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <div class="dial-container">
          <div>
            <ion-button @click="increaseHP">
              -
            </ion-button>
          </div>
          <div
            class="ion-margin-horizontal health_point text__monster"
            :class="renderHpColors"
          >
            {{ hunter.healthPoint }}
          </div>
          <div>
            <ion-button @click="decreaseHP">
              +
            </ion-button>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
} from '@ionic/vue';
import { Hunter } from '../types/app.d';

export default defineComponent({
  components: {
    IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  },
  props: {
    hunterProps: { type: Object as PropType<Hunter>, require: true, default: () => ({}) },
  },
  emits: ['createHunter'],
  data() {
    return {
      hunter: {} as Hunter,
    };
  },
  computed: {
    renderHpColors():string {
      if (this.hunter.healthPoint === 0) {
        return 'text-danger';
      } if (this.hunter.healthPoint <= 4) {
        return 'text-warning';
      }
      return 'text-dark';
    },
  },
  beforeMount() {
    this.hunter = { ...this.hunterProps };
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
 .health_point {
  font-size: 80px;
  --ion-card-color: black;
 }

 </style>
