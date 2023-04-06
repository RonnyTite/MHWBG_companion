<template>
  <IonModal
    ref="modal"
    :is-open="isOpen"
    @will-dismiss="onWillDismiss"
  >
    <IonHeader>
      <IonToolbar>
        <IonTitle>Expansions</IonTitle>
        <IonButtons slot="end">
          <IonButton
            :strong="true"
            @click="dismiss()"
          >
            OK
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonItem
        v-for="([expansionKey,expansion], index) in Object.entries(expansions)"
        :key="index"
      >
        <ion-label class="ion-margin-start">
          {{ expansion.name }}
        </ion-label>
        <IonToggle
          slot="end"
          color="primary"
          :enable-on-off-labels="true"
          :checked="expansion.include"
          @ion-change="toggleExpansion(expansionKey as ExpansionsName, $event)"
        />
      </IonItem>
    </IonContent>
  </IonModal>
</template>

<script lang="ts">
import {
  IonButtons,
  IonToggle,
  IonLabel,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
} from '@ionic/vue';
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  OverlayEventDetail,
  ToggleCustomEvent,
} from '@ionic/core/components';
import MHWBGStore from '../store/Store';
import {
  // ExpansionInterface,
  ExpansionsName,
} from '../types/app.d';

export default defineComponent({
  components: {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonToggle,
    IonLabel,
  },
  props: { isOpen: { type: Boolean, require: true, default: false } },
  emits: ['setting-modal-closed'],
  data() {
    return {
      expansions: {
        AncientForestCore: { include: true, name: 'Ancien Forest' },
        WilspireDesertCore: { include: false, name: 'Wildspire' },
        TeostraExpansion: { include: false, name: 'Teostra' },
        NergiganteExpansion: { include: false, name: 'Nergigante' },
        KusharadaoraExpansion: { include: false, name: 'Kusharadaora' },
        KuluYaKuExpansion: { include: false, name: 'Kulu Ya Ku' },
      },
    };
  },
  beforeMount() {
    const store = MHWBGStore();

    this.expansions = { ...store.expansions };
  },
  methods: {
    dismiss() {
      const modal = this.$refs.modal as typeof IonModal;
      modal.$el.dismiss();
    },
    toggleExpansion(expansionKey:ExpansionsName, event:ToggleCustomEvent):void {
      const store = MHWBGStore();
      // const expansionStatus = event.detail.checked;
      this.expansions[expansionKey].include = event.detail.checked;
      store.updateExpansions(expansionKey, event.detail.checked);
    },
    onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
      console.log(ev);
      this.$emit('setting-modal-closed');
    },
  },
});
</script>
