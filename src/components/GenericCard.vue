<template>
  <q-card
    :square="cardStyleProps.square"
    :bordered="cardStyleProps.bordered"
    :style="cardStyleProps.dimensions"
  >
    <q-card-section
      v-if="cardSectionProps.showCloseButton"
      :horizontal="cardSectionProps.horizontal"
    >
      <div class="text-h6 flex justify-between">
        {{ cardSectionProps.content.title }}
      </div>
    </q-card-section>
    <q-separator :separatorShow="separatorShow" />
    <q-card-section>
      {{ cardSectionProps.content.text }}
    </q-card-section>
    <q-card-actions v-if="cardActionProps.show">
      <div v-for="item in cardActionProps.buttons" :key="item.id">
        <q-btn
          :label="item.contentProps?.label"
          :icon="item.contentProps?.icon"
          :no-caps="item.contentProps?.noCaps"
          :no-wrap="item.contentProps?.noWrap"
          :stack="item.contentProps?.stack"
          :type="item.type"
          :disable="item.disable"
          :size="item.sizeProps?.size"
          :outline="item.sizeProps?.outline"
          :flat="item.sizeProps?.flat"
          :rounded="item.sizeProps?.rounded"
          :square="item.sizeProps?.square"
          :padding="item.sizeProps?.padding"
          :color="item.sizeProps?.color"
          :text-color="item.sizeProps?.textColor"
          :dense="item.sizeProps?.dense"
          :round="item.sizeProps?.round"
          @click="eventAction(item.contentProps?.label)"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
interface CardProps {
  cardStyleProps: {
    square?: boolean;
    bordered?: boolean;
    dimensions: {
      width: string;
      height: string;
    };
  };
  cardSectionProps: {
    showCloseButton: boolean;
    horizontal: boolean;
    content: {
      title: string;
      text: string;
    };
  };
  separatorShow?: boolean;
  cardActionProps: {
    show: boolean;
    buttons: {
      id: number;
      contentProps?: {
        label?: string | number;
        icon?: string;
        noCaps?: boolean;
        noWrap?: boolean;
        stack?: boolean;
      };
      type: string;
      disable?: boolean;
      sizeProps?: {
        size?: string;
        outline?: boolean;
        flat?: boolean;
        rounded?: boolean;
        square?: boolean;
        padding?: string;
        color?: string;
        textColor?: string;
        dense?: boolean;
        round?: boolean;
      };
    }[];
  };
}
function eventAction(buttonLabel: string) {
  console.log('--> eventAction function: ', buttonLabel)
  debugger
  if (1 == 1)
  {
    defineEmits<{
      (event: 'onCancelAction', value: boolean): void
      (event: 'onOkAction', value: boolean): void
    }>()
  }
  else
  {

  }
}
withDefaults(defineProps<CardProps>(), {});
</script>

<style lang="scss" scoped>
.q-card {
  &__section,
  &__actions {
    padding: 8px 12px;
  }
  &__actions {
    align-items: center !important;
    justify-content: space-around !important;
  }
}
</style>
