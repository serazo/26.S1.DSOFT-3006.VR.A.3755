<template>
    <ion-page>
        <ion-menu content-id="main-content">
            <ion-header>
            <ion-toolbar color="tertiary">
                <ion-title>Menu Content</ion-title>
            </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item>
                        <ion-avatar aria-hidden="true" slot="start">
                            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </ion-avatar>
                        <ion-label>{{ userStore.userData.usuario }}</ion-label>
                        <ion-button slot="end" fill="solid" size="small" @click="handleLogout">Salir</ion-button>
                    </ion-item>
                    <ion-accordion-group>
                        <template v-for="(menu, key) in contentStore.menu" :key="key">
                            <ion-accordion :value="'menu-'+key">
                                <ion-item slot="header" color="light">
                                    <ion-label><i :class="menu.icon"></i> {{ menu.name }}</ion-label>
                                </ion-item>
                                <div slot="content">
                                    <ion-list>
                                        <ion-item v-for="(item, itemKey) in menu.sub" :key="itemKey">
                                            <ion-label>{{ item.name }}</ion-label>
                                        </ion-item>
                                    </ion-list>
                                </div>
                            </ion-accordion>
                        </template>
                    </ion-accordion-group>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>Menu</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content id="main-content" class="ion-padding">
            
             Tap the button in the toolbar to open the menu. 
            </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
  import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonList, IonAvatar, IonButton } from '@ionic/vue';
  import { useUserStore } from '@/stores/user';
  import { useContentStore } from '@/stores/content';
  import { useRouter } from 'vue-router';
  
  const contentStore = useContentStore();
  const userStore = useUserStore();
  const router = useRouter();
  async function handleLogout(){
    await userStore.$setLogin(null);
    router.push('/login');
  }
  //comentario de prueba
</script>

<style scoped>
  ion-menu::part(backdrop) {
    background-color: rgba(255, 0, 255, 0.5);
  }

  ion-menu::part(container) {
    border-radius: 0 20px 20px 0;

    box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
  }
</style>