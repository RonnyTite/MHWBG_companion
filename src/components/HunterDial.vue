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
        <div class="dial-container">
          <div>
            <IonButton @click="increaseHP">
              -
            </IonButton>
          </div>
          <div
            class="ion-margin-horizontal health_point text__monster"
            :class="renderHpColors"
          >
            {{ hunter.healthPoint }}
          </div>
          <div>
            <IonButton @click="decreaseHP">
              +
            </IonButton>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,
} from '@ionic/vue';
import {
  closeOutline,
} from 'ionicons/icons';
import { Hunter } from '../types/app.d';

export default defineComponent({
  components: {
    IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,
  },
  props: {
    hunterProps: { type: Object as PropType<Hunter>, require: true, default: () => ({}) },
    hunterIndex: { type: Number, require: true, default: 0 },
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
