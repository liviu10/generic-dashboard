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
        component: () => import('pages/Files/IndexPage.vue'),
        meta: {
          title: 'Files page',
        },
      },
      {
        path: '/admin/operations',
        name: 'OperationsPage',
        component: () => import('pages/Operations/IndexPage.vue'),
        meta: {
          title: 'Operations page',
        },
      },
      {
        path: '/admin/settings',
        name: 'SettingsPage',
        component: () => import('pages/Settings/IndexPage.vue'),
        meta: {
          title: 'Settings page',
        },
      },
      {
        path: '/admin/connect',
        name: 'ConnectPage',
        component: () => import('pages/Connect/IndexPage.vue'),
        meta: {
          title: 'Connect page',
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
