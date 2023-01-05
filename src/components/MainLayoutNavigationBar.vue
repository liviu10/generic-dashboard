<template>
  <q-item v-if="link === '/'" clickable tag="a" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-expansion-item v-else :icon="icon" :label="title" :caption="caption">
    <q-item
      v-for="item in submenu"
      :key="item.id"
      clickable
      tag="a"
      :href="link"
      dense
    >
      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
</template>

<script setup lang="ts">
export interface NavigationBarProps {
  title: string;
  caption?: string;
  icon?: string;
  link: string;
  submenu?: {
    id: number;
    title: string;
  }[];
}
withDefaults(defineProps<NavigationBarProps>(), {
  caption: '',
  icon: '',
  link: '#',
});
</script>
