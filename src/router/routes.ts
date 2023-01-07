import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: 'Home page',
        },
      },
      {
        path: '/admin/configurations',
        name: 'ConfigurationsPage',
        component: () => import('pages/ConfigurationsPage.vue'),
        meta: {
          title: 'Configurations page',
        },
      },
      {
        path: '/admin/files',
        name: 'FilesPage',
        component: () => import('pages/FilesPage.vue'),
        meta: {
          title: 'Files page',
        },
      },
      {
        path: '/admin/operations',
        name: 'OperationsPage',
        component: () => import('pages/OperationsPage.vue'),
        meta: {
          title: 'Operations page',
        },
      },
      {
        path: '/admin/settings',
        name: 'SettingsPage',
        component: () => import('pages/SettingsPage.vue'),
        meta: {
          title: 'Settings page',
        },
      },
      {
        path: '/admin/marketing',
        name: 'MarketingPage',
        component: () => import('pages/MarketingPage.vue'),
        meta: {
          title: 'Marketing page',
        },
      },
    ],
  },

  // Capture and display an error message
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
