<template>
  <q-layout view="lHh Lpr lFf" class="main">
    <!-- HEADER SECTION START -->
    <q-header elevated class="main main__header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer()"
        />
        <q-toolbar-title class="main main__header__title">
          {{ displayApplicationTitle() }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!-- HEADER SECTION END -->

    <!-- NAVIGATION BAR SECTION START -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="main main__drawer"
    >
      <q-list class="main main__drawer__list">
        <MainLayoutNavigationBar
          v-for="link in navigationBarLinks"
          :key="link.title"
          v-bind="link"
          class="main main__drawer__list__item"
        />
      </q-list>
    </q-drawer>
    <!-- NAVIGATION BAR SECTION END -->

    <!-- MAIN CONTAINER SECTION START -->
    <q-page-container class="main main__container">
      <router-view />
    </q-page-container>
    <!-- MAIN CONTAINER SECTION END -->

    <!-- FOOTER SECTION START -->
    <q-footer elevated class="main main__footer">
      <q-toolbar>
        <div class="main main__footer__title">
          <p>
            <span>{{ displayApplicationTitle() }}</span>
            {{ displayCopyrightInfo() }}
          </p>
        </div>
      </q-toolbar>
      <q-toolbar>
        <div class="main main__footer__designer">
          <p>
            Designed by
            <a :href="designerContactUrl">{{ designerName }}</a>
          </p>
        </div>
      </q-toolbar>
    </q-footer>
    <!-- FOOTER SECTION END -->
  </q-layout>
</template>

<script setup lang="ts">
// Import framework related utilities
import { Ref, ref } from 'vue';

// Import necessary components
import MainLayoutNavigationBar from 'src/components/MainLayoutNavigationBar.vue';

// Display the application name and version
let applicationTitle: Ref<string | undefined> = ref(undefined);
let applicationVersion: Ref<string | undefined> = ref(undefined);
function displayApplicationTitle() {
  applicationTitle.value = 'Generic Dashboard';
  if (applicationVersion.value === undefined) {
    return applicationTitle.value;
  } else {
    return applicationTitle.value + applicationVersion.value;
  }
}

// Navigation bar related functions and utilities
let leftDrawerOpen: Ref<boolean> = ref(false);
let navigationBarLinks: Ref<
  {
    title: string;
    caption?: string;
    icon?: string;
    link: string;
  }[]
> = ref([
  {
    title: 'Documentation',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'school',
    link: '#',
  },
]);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Footer related functions and utilities
function displayCopyrightInfo() {
  const currentYear: number = new Date().getFullYear();
  return 'Copyright © ' + currentYear + ' All right reserved';
}
let designerContactUrl: Ref<string> = ref('#');
let designerName: Ref<string> = ref('Liviu Voica');
</script>
