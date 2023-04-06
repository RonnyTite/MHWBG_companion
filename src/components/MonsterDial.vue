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
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size="2">
              <IonButton @click="increaseHP">
                -
              </IonButton>
            </IonCol>
            <IonCol
              class="ion-margin-horizontal health_point text__monster"
              size="5"
              :class="renderHpColors"
            >
              {{ monster.healthPoint }}
            </IonCol>
            <IonCol size="2">
              <IonButton @click="decreaseHP">
                +
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  IonButton, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol,
} from '@ionic/vue';
import {
  closeOutline,
} from 'ionicons/icons';
import { Monster as MonsterInterface } from '../types/app.d';
import Monster from '../scripts/MonsterController';

export default defineComponent({
  components: {
    IonButton, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol,
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
  computed: {
    renderHpColors():string {
      const { maxHealthPoint } = this.monster.rank[this.monsterProperties.rank];
      const lowHealth = Math.floor(maxHealthPoint / 3);

      if (this.monster.healthPoint <= 8) {
        return 'text-danger';
      } if (this.monster.healthPoint <= lowHealth) {
        return 'text-warning';
      }
      return 'text-dark';
    },
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
