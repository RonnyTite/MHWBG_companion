<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="text__monster">
          Monster Hunter World: Boardgame
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            Blank
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <MonsterDial />
        <!-- <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> -->

        <HunterDial @create-hunter="openModalHunter" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/vue';
import HunterDial from '@/components/HunterDial.vue';
import MonsterDial from '@/components/MonsterDial.vue';
import { defineComponent } from 'vue';
import MHWBGStore from '../store/Store';

export default defineComponent({
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, HunterDial, MonsterDial,
  },
  beforeMount() {
    const store = MHWBGStore();
    store.addAncientForestCoreMonsterList(); // Add expansion
  },
  methods: {
    openModalHunter() {
    // open Modal hunter
    },
  },
});

</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
