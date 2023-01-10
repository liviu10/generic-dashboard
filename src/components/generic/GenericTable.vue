<template>
  <q-table
    :rows="data?.records"
    :fullscreen="fullscreen"
    :loading="loading"
    :square="square"
    :no-data-label="noDataLabel ? noDataLabel : 'Loading resource! Please wait!'"
  >
    <template v-slot:loading>
      <GenericLoading :showing="true" />
    </template>
    <template v-slot:top="props" v-if="data?.records">
      <div v-if="displayActionCreate">
        <GenericButton
          :icon="'add'"
          :label="'Create'"
          :type="'button'"
          @click="$emit('onActionClickCreateRecord', true)"
        />
      </div>
      <div v-if="displayTitle">
        {{ resourceTitle }}
      </div>
      <div>
        <GenericButton
          :flat="true"
          :round="true"
          :dense="true"
          :type="'button'"
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </div>
    </template>
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ displayColumnName(col.name) }}
        </q-th>
        <q-th v-if="data?.records && displayActionColumn"> Actions </q-th>
      </q-tr>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td v-for="row in props.row" :key="row.id">
          {{ row }}
        </q-td>
        <q-td v-if="data?.records && displayActionColumn">
          <GenericButton
            v-if="displayActionShow"
            :icon="'visibility'"
            :type="'button'"
            @click="$emit('onActionClickShowRecord', props.row.id)"
          />
          <GenericButton
            v-if="displayActionEdit"
            :icon="'edit'"
            :type="'button'"
            @click="$emit('onActionClickEditRecord', props.row.id)"
          />
          <GenericButton
            v-if="displayActionDelete"
            :icon="'delete'"
            :type="'button'"
            @click="$emit('onActionClickDeleteRecord', props.row.id)"
          />
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script setup lang="ts">
// Import framework related utilities
import { defineEmits } from 'vue';

// Import necessary interfaces, components and utilities
import { StoreApiResponseInterface } from 'src/interfaces/StoreApiResponseInterface';
import GenericLoading from 'src/components/generic/GenericLoading.vue';
import GenericButton from 'src/components/generic/GenericButton.vue';
import { CapitalizeFirstLetter } from 'src/library/TextOperations';

export interface TableProps {
  bordered?: boolean;
  color?: string;
  dark?: boolean;
  data: StoreApiResponseInterface['data'];
  dense?: boolean;
  displayActionColumn: boolean;
  displayActionCreate: boolean;
  displayActionDelete: boolean;
  displayActionEdit: boolean;
  displayActionShow: boolean;
  displayTitle?: boolean;
  flat?: boolean;
  fullscreen?: boolean;
  iconFirstPage?: string;
  iconLastPage?: string;
  iconNextPage?: string;
  iconPrevPage?: string;
  loading: boolean;
  loadingLabel?: string;
  noDataLabel?: string;
  resourceTitle?: string;
  rowsPerPageLabel?: string;
  rowsPerPageOptions?: number[];
  square: boolean;
  title?: string | undefined;
}

// Display and format the column name
function displayColumnName(columnName: string): string {
  return CapitalizeFirstLetter(columnName);
}

// Emit events for action create, show, edit and delete
defineEmits<{
  (event: 'onActionClickCreateRecord', value: true): void;
  (event: 'onActionClickShowRecord', rowId: StoreApiResponseInterface['data']): void;
  (event: 'onActionClickEditRecord', rowId: StoreApiResponseInterface['data']): void;
  (event: 'onActionClickDeleteRecord', rowId: StoreApiResponseInterface['data']): void;
}>();

withDefaults(defineProps<TableProps>(), {});
</script>

<style lang="scss" scoped></style>
