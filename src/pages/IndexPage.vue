<template>
  <q-page class="row items-center justify-evenly">
    <GenericCard
      :cardStyleProps="{
        square: true,
        bordered: true,
        dimensions: {
          width: '300px',
          height: 'auto',
        },
      }"
      :cardSectionProps="{
        showCloseButton: true,
        horizontal: false,
        content: {
          title: 'Card title',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum id, in itaque odit nemo ex, soluta sint quae hic voluptatem aspernatur quam nihil incidunt alias nostrum quis? Eaque, quia!',
        },
      }"
      :separatorShow="true"
      :cardActionProps="{
        show: true,
        buttons: [
          {
            id: 1,
            contentProps: {
              label: 'Cancel',
            },
            type: 'button',
            sizeProps: {
              size: 'sm',
              square: true,
              padding: 'sm',
              color: 'negative',
              textColor: 'white',
            },
          },
          {
            id: 2,
            contentProps: {
              label: 'Save',
            },
            type: 'button',
            sizeProps: {
              size: 'sm',
              square: true,
              padding: 'sm',
              color: 'positive',
              textColor: 'white',
            },
          }
        ]
      }"
      @onCancelAction="onCancelAction"
      @onOkAction="onOkAction"
    />
  </q-page>
</template>

<script setup lang="ts">
import GenericCard from 'src/components/GenericCard.vue';

function onCancelAction(value: boolean) {
  console.log(value)
  debugger
}
function onOkAction(value: boolean) {
  console.log(value)
  debugger
}
</script>
