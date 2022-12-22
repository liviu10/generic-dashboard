<template>
  <q-img
    :loading="loading"
    :crossorigin="crossorigin"
    :decoding="decoding"
    :referrerpolicy="referrerpolicy"
    :fetchpriority="fetchpriority"
    :draggable="draggable"
    :alt="alt"
    :src="src"
    :sizes="sizes"
    :ratio="ratio"
    :width="width"
    :height="height"
    :fit="fit"
    :position="position"
    :img-class="imgClass"
    :spinnerColor="spinnerColor"
    :spinnerSize="spinnerSize"
  />
</template>

<script setup lang="ts">
export interface ImageProps {
  loading?: 'lazy' | 'eager' | undefined;
  crossorigin?: 'anonymous' | 'use-credentials' | undefined;
  decoding?: 'sync' | 'async' | 'auto' | undefined;
  referrerpolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
    | undefined;
  fetchpriority?: 'high' | 'low' | 'auto';
  draggable: boolean;
  alt?: string | undefined;
  src: string;
  sizes: string;
  ratio?: string | number;
  width?: string;
  height?: string;
  fit?: 'cover' | 'fill' | 'contain' | 'none' | 'scale-down' | undefined
  position?: string;
  imgClass?: string;
  spinnerColor?: string;
  spinnerSize?: string;
}

withDefaults(defineProps<ImageProps>(), {});
</script>

<style lang="scss" scoped></style>
