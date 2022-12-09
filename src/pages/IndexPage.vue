<template>
  <q-page class="row items-center justify-evenly">
    <GenericButton
      :buttonLabel="'Generic button'"
      :buttonIcon="'done'"
      :buttonNoCaps="true"
      :buttonNoWrap="true"
      :buttonStack="false"
      :buttonType="'button'"
      :buttonDisable="false"
      :buttonSize="'md'"
      :buttonOutline="false"
      :buttonFlat="false"
      :buttonRounded="false"
      :buttonSquare="true"
      :buttonPadding="'sm'"
      :buttonColor="'primary'"
      :buttonTextColor="'white'"
      :buttonDense="false"
      :buttonRound="false"
    />
    <GenericIcon :iconName="'done'" :iconSize="'md'" :iconColor="'primary'" />
    <GenericList
      :listSeparator="true"
      :listPadding="false"
      :listBordered="true"
      :listDense="true"
      :listItemSection="[
        {
          id: 1,
          content: 'First item',
          itemProps: {
            disable: true,
            clickable: true,
          },
        },
        {
          id: 2,
          content: 'Second item',
          itemProps: {
            clickable: true,
          },
        },
        {
          id: 3,
          content: 'Third item',
          itemProps: {
            clickable: true,
          },
        },
      ]"
    />
  </q-page>
</template>

<script setup lang="ts">
import GenericButton from 'src/components/GenericButton.vue';
import GenericIcon from 'src/components/GenericIcon.vue';
import GenericList from 'src/components/GenericList.vue';
</script>
