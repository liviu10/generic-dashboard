<template>
  <q-layout view="lHh Lpr lFf" class="main">
    <!-- HEADER SECTION START -->
    <MainLayoutHeader
      :application-title="
        typeof displayApplicationTitle() === 'string'
          ? displayApplicationTitle()
          : 'Generic Dashboard'
      "
      @toggleLeftDrawer="toggleLeftDrawer()"
    />
    <!-- HEADER SECTION END -->

    <!-- NAVIGATION BAR SECTION START -->
    <q-drawer
      v-model="leftDrawerOpen"
      :show-if-above="false"
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
    <MainLayoutFooter
      :application-title="
        typeof displayApplicationTitle() === 'string'
          ? displayApplicationTitle()
          : 'Generic Dashboard'
      "
      :copyright-info="
        typeof displayCopyrightInfo() === 'string'
          ? displayCopyrightInfo()
          : 'Copyright © ' + new Date().getFullYear() + ' All right reserved'
      "
      :designer-contact-url="designerContactUrl ? designerContactUrl : '#'"
      :designer-name="designerName ? designerName : 'Full name'"
    />
    <!-- FOOTER SECTION END -->
  </q-layout>
</template>

<script setup lang="ts">
// Import framework related utilities
import { Ref, ref } from 'vue';

// Import necessary components
import MainLayoutHeader from 'src/components/MainLayoutHeader.vue';
import MainLayoutNavigationBar from 'src/components/MainLayoutNavigationBar.vue';
import MainLayoutFooter from 'src/components/MainLayoutFooter.vue';

// Display the application name and version
let applicationTitle: Ref<string | undefined> = ref(undefined);
let applicationVersion: Ref<string | undefined> = ref(undefined);
function displayApplicationTitle(): string {
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
    submenu?: {
      id: number;
      title: string;
    }[];
  }[]
> = ref([
  {
    title: 'Home',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Configurations',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'construction',
    link: '/admin/configurations',
    submenu: [
      {
        id: 1,
        title: 'Account types',
      },
      {
        id: 2,
        title: 'Geography',
      },
      {
        id: 3,
        title: 'Companies',
      },
      {
        id: 4,
        title: 'Currency codes',
      },
      {
        id: 5,
        title: 'Document types',
      },
      {
        id: 6,
        title: 'Economic activities',
      },
      {
        id: 7,
        title: 'Product types',
      },
      {
        id: 8,
        title: 'Unit of measurements',
      },
      {
        id: 9,
        title: 'Vat types',
      },
      {
        id: 10,
        title: 'Warehouse types',
      }
    ]
  },
  {
    title: 'Files',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'folder',
    link: '/admin/files',
    submenu: [
      {
        id: 1,
        title: 'Accounts',
      },
      {
        id: 2,
        title: 'Clients',
      },
      {
        id: 3,
        title: 'Products',
      },
      {
        id: 4,
        title: 'Suppliers',
      }
    ]
  },
  {
    title: 'Operations',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'compare_arrows',
    link: '/admin/operations',
    submenu: [
      {
        id: 1,
        title: 'Cash and Bank register',
      },
      {
        id: 2,
        title: 'Consumption receipts',
      },
      {
        id: 3,
        title: 'Invoices',
      },
      {
        id: 4,
        title: 'Sales invoices',
      },
      {
        id: 5,
        title: 'Shipping notes',
      }
    ]
  },
  {
    title: 'Settings',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'settings',
    link: '/admin/settings',
    submenu: [
      {
        id: 1,
        title: 'Accepted domains',
      },
      {
        id: 2,
        title: 'Errors and notifications',
      },
      {
        id: 3,
        title: 'Users',
      }
    ]
  },
  {
    title: 'Connect',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'connect_without_contact',
    link: '/admin/connect',
    submenu: [
      {
        id: 1,
        title: 'Contact me',
      },
      {
        id: 2,
        title: 'Newsletter campaigns',
      }
    ]
  },
]);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Footer related functions and utilities
function displayCopyrightInfo(): string {
  const currentYear: number = new Date().getFullYear();
  return 'Copyright © ' + currentYear + ' All right reserved';
}
let designerContactUrl: Ref<string> = ref('#');
let designerName: Ref<string> = ref('Liviu Voica');
</script>
