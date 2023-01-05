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
    link?: string;
    submenu?: {
      id: number;
      title: string;
      link: string;
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
    submenu: [
      {
        id: 1,
        title: 'Account types',
        link: '/admin/configurations/account-types',
      },
      {
        id: 2,
        title: 'Geography',
        link: '/admin/configurations/geography',
      },
      {
        id: 3,
        title: 'Companies',
        link: '/admin/configurations/companies',
      },
      {
        id: 4,
        title: 'Currency codes',
        link: '/admin/configurations/currency-codes',
      },
      {
        id: 5,
        title: 'Document types',
        link: '/admin/configurations/document-types',
      },
      {
        id: 6,
        title: 'Economic activities',
        link: '/admin/configurations/economic-activities',
      },
      {
        id: 7,
        title: 'Product types',
        link: '/admin/configurations/product-types',
      },
      {
        id: 8,
        title: 'Unit of measurements',
        link: '/admin/configurations/unit-of-measurements',
      },
      {
        id: 9,
        title: 'Vat types',
        link: '/admin/configurations/vat-types',
      },
      {
        id: 10,
        title: 'Warehouse types',
        link: '/admin/configurations/warehouse-types',
      }
    ]
  },
  {
    title: 'Files',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'folder',
    submenu: [
      {
        id: 1,
        title: 'Accounts',
        link: '/admin/files/accounts',
      },
      {
        id: 2,
        title: 'Clients',
        link: '/admin/files/clients',
      },
      {
        id: 3,
        title: 'Products',
        link: '/admin/files/products',
      },
      {
        id: 4,
        title: 'Suppliers',
        link: '/admin/files/suppliers',
      }
    ]
  },
  {
    title: 'Operations',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'compare_arrows',
    submenu: [
      {
        id: 1,
        title: 'Cash and Bank register',
        link: '/admin/operations/cash-and-bank-register',
      },
      {
        id: 2,
        title: 'Consumption receipts',
        link: '/admin/operations/consumption-receipts',
      },
      {
        id: 3,
        title: 'Invoices',
        link: '/admin/operations/invoices',
      },
      {
        id: 4,
        title: 'Sales invoices',
        link: '/admin/operations/sales-invoices',
      },
      {
        id: 5,
        title: 'Shipping notes',
        link: '/admin/operations/shipping-notes',
      }
    ]
  },
  {
    title: 'Settings',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'settings',
    submenu: [
      {
        id: 1,
        title: 'Accepted domains',
        link: '/admin/settings/accepted-domains',
      },
      {
        id: 2,
        title: 'Errors and notifications',
        link: '/admin/settings/errors-and-notifications',
      },
      {
        id: 3,
        title: 'Users',
        link: '/admin/settings/users',
      }
    ]
  },
  {
    title: 'Connect',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'connect_without_contact',
    submenu: [
      {
        id: 1,
        title: 'Contact me',
        link: '/admin/connect/contact-me',
      },
      {
        id: 2,
        title: 'Newsletter campaigns',
        link: '/admin/connect/newsletter-campaigns',
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
