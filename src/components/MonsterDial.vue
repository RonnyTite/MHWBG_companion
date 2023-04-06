<template>
  <div>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          <span> {{ monster.name }} HP</span>
          <span><IonImg
            class="item-img"
            :src="`./assets/rank/${monsterProperties.rank}_stars.png`"
          /></span>
          <span class="close">
            <IonButton
              class="close-btn"
              fill="outline"
              @click="$emit('remove-monster')"
            >
              <IonIcon
                :icon="closeOutline"
                color="dark"
              />
            </IonButton>
          </span>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
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
      </IonCardContent>
    </IonCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  IonButton, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,
} from '@ionic/vue';
import {
  closeOutline,
} from 'ionicons/icons';
import { Monster as MonsterInterface } from '../types/app.d';
import Monster from '../scripts/MonsterController';

export default defineComponent({
  components: {
    IonButton, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,
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
  emits: ['remove-monster'],
  setup() {
    return {
      closeOutline,
    };
  },
  data() {
    return {
      monster: {} as MonsterInterface,
    };
  },
  beforeMount() {
    const { name, rank } = this.monsterProperties;
    this.monster = new Monster({ name, monsterRank: rank });
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
 .monster-img{
  width: 50px;
  height: 50px;
  display: block;
  margin: auto;
 }

 </style>
