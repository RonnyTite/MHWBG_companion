<template>
  <div>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          <span>Hunter {{ hunterIndex + 1 }}</span>
          <span class="close">
            <IonButton
              class="close-btn"
              fill="outline"
              @click="removeHunter"
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
        <div>{{ hunter.name }} HP </div>

        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size="2">
              <IonButton @click="increaseHP">
                -
              </IonButton>
            </IonCol>
            <IonCol
              class="ion-margin-horizontal health_point text__monster"
              :class="renderHpColors"
              size="3"
            >
              {{ hunter.healthPoint }}
            </IonCol>
            <IonCol size="2">
              <IonButton @click="decreaseHP">
                +
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol
              v-if="palicoEnabled"
              size="2"
            >
              <IonImg
                class="item-img"

                src="./assets/palico.jpg"
              />
            </IonCol>
            <IonCol size="1" /> <!-- offset 1 -->
            <IonCol size="2">
              <IonImg
                class="item-img"
                src="./assets/weapons/sns_1.png"
              />
            </IonCol>
            <IonCol size="2">
              <IonImg
                class="item-img"
                src="./assets/armors/armor_head_1.png"
              />
            </IonCol>
            <IonCol size="2">
              <IonImg
                class="item-img"
                src="./assets/armors/armor_torso_1.png"
              />
            </IonCol>
            <IonCol size="2">
              <IonImg
                class="item-img"
                src="./assets/armors/armor_legs_1.png"
              />
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
  IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol, IonImg,
} from '@ionic/vue';
import {
  closeOutline,
} from 'ionicons/icons';
import { Hunter } from '../types/app.d';

export default defineComponent({
  components: {
    IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol, IonImg,
  },
  props: {
    hunterProps: { type: Object as PropType<Hunter>, require: true, default: () => ({}) },
    hunterIndex: { type: Number, require: true, default: 0 },
    palicoEnabled: { type: Boolean, require: true, default: false },
  },
  emits: ['remove-hunter'],
  setup() {
    return {
      closeOutline,
    };
  },
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
    removeHunter() {
      this.$emit('remove-hunter', this.hunter.name);
    },
  },

});
</script>

 <style scoped>
 </style>
