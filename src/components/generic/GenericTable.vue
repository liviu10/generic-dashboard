<template>
  <q-table
    :rows="data.records"
    :fullscreen="fullscreen"
    :loading="loading"
    :square="square"
  >
    <template v-slot:loading>
      <GenericLoading :showing="true" />
    </template>
    <template v-slot:top="props">
      <div v-if="displayTitle">
        {{ data.title }}
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
        <q-th v-for="col in props.cols" :key="col.id">
          {{ displayColumnName(col.name) }}
        </q-th>
        <q-th v-if="displayActionColumn"> Actions </q-th>
      </q-tr>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td v-for="row in props.row" :key="row.id">
          {{ row }}
        </q-td>
        <q-td v-if="displayActionColumn">
          <GenericButton :label="'Add'" :type="'button'" />
          <GenericButton :label="'Del'" :type="'button'" />
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script setup lang="ts">
// Import framework related utilities

// Import necessary components and interfaces
import { ApiResponseInterface } from 'src/stores/generic-store';
import GenericLoading from 'src/components/generic/GenericLoading.vue';
import GenericButton from 'src/components/generic/GenericButton.vue';

export interface TableProps {
  data: ApiResponseInterface['data'];
  loading: boolean;
  iconFirstPage?: string;
  iconPrevPage?: string;
  iconNextPage?: string;
  iconLastPage?: string;
  displayTitle?: boolean;
  title?: string | undefined;
  fullscreen?: boolean;
  rowsPerPageLabel?: string;
  rowsPerPageOptions?: number[];
  color?: string;
  dense?: boolean;
  dark?: boolean;
  flat?: boolean;
  bordered?: boolean;
  square: boolean;
  displayActionColumn: boolean;
}

// Display and format the column name
function displayColumnName(columnName: string): string {
  return columnName.charAt(0).toUpperCase() + columnName.slice(1);
}

withDefaults(defineProps<TableProps>(), {});
</script>

<style lang="scss" scoped></style>
