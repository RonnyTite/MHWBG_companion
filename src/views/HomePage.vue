<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonTitle class="text__monster">
          Monster Hunter World: Boardgame
        </IonTitle>
        <IonButtons slot="end">
          <IonButton
            fill="clear"
            @click="toggleSettings"
          >
            <IonIcon
              :icon="cogOutline"
            />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <div
        id="container"
        class="ion-margin"
      >
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol
              size="12"
              size-md="4"
            >
              <MonsterDial
                v-if="monsterProperties.name"
                :monster-properties="monsterProperties"
                @remove-monster="removeMonster"
              />
              <MonsterScrollDown
                v-else
                @monster-selected="selectMonster"
              />
            </IonCol>
          </IonRow>
        </IonGrid>

        <div class="hunter-dials-container">
          <IonGrid>
            <IonRow>
              <IonCol
                v-for="(hunter, index) in hunters"
                :key="index"
                size="12"
                size-lg="3"
                size-md="6"
              >
                <HunterDial
                  :hunter-props="hunter"
                  :hunter-index="index"
                  :palico-enabled="hunters.length <= 2"
                  @create-hunter="openModalHunter"
                  @remove-hunter="removeHunter"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <IonButton
          v-if="hunters.length <4"
          @click="createHunter"
        >
          Add Hunter
        </IonButton>
      </div>
      <IonFab
        slot="fixed"
        vertical="bottom"
        horizontal="end"
      >
        <IonFabButton>
          <IonIcon :icon="add" />
        </IonFabButton>
        <IonFabList side="top">
          <!-- Create Game -->
          <!-- <IonFabButton>
            <IonImg
              src="./assets/items/questBook_dark.png"
              class="add-game-btn"
            />
          </IonFabButton> -->
          <!-- Create Campaign -->
          <IonFabButton>
            <IonImg
              src="./assets/items/questBook_dark.png"
              class="add-game-btn"
            />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonContent>
    <SettingsModal
      :is-open="isSettingsOpen"
      @setting-modal-closed="toggleSettings"
    />
  </IonPage>
</template>

<script lang="ts">
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab, IonFabButton, IonImg, IonFabList, IonButtons,
  IonIcon, IonGrid, IonRow, IonCol,
} from '@ionic/vue';
import HunterDial from '@/components/HunterDial.vue';
import MonsterDial from '@/components/MonsterDial.vue';
import { defineComponent } from 'vue';
import { Hunter as HunterInterface } from '@/types/app';
import MonsterScrollDown from '@/components/MonsterScrollDown.vue';
import {
  add, cogOutline,
} from 'ionicons/icons';
import SettingsModal from '@/components/SettingsModal.vue';
import Hunter from '../scripts/HunterController';
import MHWBGStore from '../store/Store';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonButtons,
    IonPage,
    IonTitle,
    IonToolbar,
    HunterDial,
    MonsterDial,
    MonsterScrollDown,
    IonButton,
    IonFab,
    IonFabButton,
    IonImg,
    SettingsModal,
    IonIcon,
    IonFabList,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    return {
      add,
      cogOutline,
    };
  },
  data() {
    return {
      hunters: [] as Array<HunterInterface>,
      monsterProperties: {
        name: '',
        rank: 0,
      } as {
        name: string,
        rank: number,
      },
      isSettingsOpen: false,
    };
  },
  beforeMount() {
    const store = MHWBGStore();
    store.enableExpansions(); // Add expansion
  },
  methods: {
    toggleSettings() {
      this.isSettingsOpen = !this.isSettingsOpen;
    },
    openModalHunter() { // open Modal hunter
    },
    createHunter() {
      // open creation modal
      const newHunter = new Hunter({ name: `Ronny${this.hunters.length}` });
      this.hunters.push(newHunter);
    },
    removeHunter(name:string) {
      const hunterIndex = this.hunters.findIndex((hunter) => name === hunter.name);
      this.hunters.splice(hunterIndex, 1);
    },
    removeMonster() {
      this.monsterProperties = {
        name: '',
        rank: 0,
      };
    },
    selectMonster({ name, rank }:{ name:string, rank:number }) {
      this.monsterProperties = { name, rank };
    },
  },
});

</script>

<style>
#container {
  text-align: center;
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

 .health_point {
  font-size: 80px;
  line-height: 20px;
 }
 .close{
  position: absolute;
  right: 0px;
  top: 0px;
 }
 .add-game-btn {
  width: 20px;
  height: 20px;
}
.item-img{
 width: 40px;
 height: 40px;
 display: inline-block;
 text-align: center;
 cursor:pointer;
}
</style>
