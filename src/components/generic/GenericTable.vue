<template>
  <q-table
    class="table table--generic"
    :dense="dense"
    :fullscreen="fullscreen"
    :loading="loading"
    :no-data-label="noDataLabel ? noDataLabel : defaultNoDataLabel()"
    :rows="data?.records"
    :rows-per-page-options="
      rowsPerPageOptions && rowsPerPageOptions?.length > 0
        ? rowsPerPageOptions
        : defaultRowsPerPageOption()
    "
    :separator="separator"
    :square="square"
    :wrap-cells="wrapCells"
  >
    <template v-slot:loading>
      <GenericLoading :showing="true" />
    </template>
    <template v-slot:top="props" v-if="data?.records">
      <div class="table table__top">
        <div v-if="displayTitle" class="table table__top-title q-mb-sm">
          {{ displayResourceTitle(resourceTitle) }}
        </div>
        <div class="table table__top-actions">
          <div v-if="displayActionCreate">
            <GenericButton
              class="q-px-sm"
              :color="'positive'"
              :dense="true"
              :icon="'add'"
              :label="'New record'"
              :noCaps="true"
              :square="true"
              :type="'button'"
              :textColor="'black'"
              @click="$emit('onActionClickCreateRecord', true)"
            />
          </div>
          <div v-if="!fullscreen">
            <GenericButton
              :flat="true"
              :round="true"
              :dense="true"
              :type="'button'"
              :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="props.toggleFullscreen"
            />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:header="props">
      <q-tr :props="props" class="table table__header">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
          class="table table__header-column-name"
        >
          {{ displayColumnName(col.name) }}
        </q-th>
        <q-th
          v-if="data?.records && displayActionColumn"
          class="table table__header-column-name"
        >
          Actions
        </q-th>
      </q-tr>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props" class="table table__body">
        <q-td
          v-for="row in props.row"
          :key="row.id"
          class="table table__body-column-value"
        >
          {{ row }}
        </q-td>
        <q-td
          v-if="data?.records && displayActionColumn"
          class="table table__body-column-value"
        >
          <GenericButton
            class="q-px-sm"
            :color="'positive'"
            :dense="true"
            :icon="'visibility'"
            :noCaps="true"
            :square="true"
            :type="'button'"
            :textColor="'black'"
            v-if="displayActionShow"
            @click="$emit('onActionClickShowRecord', props.row.id)"
          />
          <GenericButton
            class="q-px-sm"
            :color="'warning'"
            :dense="true"
            :icon="'edit'"
            :noCaps="true"
            :square="true"
            :type="'button'"
            :textColor="'black'"
            v-if="displayActionEdit"
            @click="$emit('onActionClickEditRecord', props.row.id)"
          />
          <GenericButton
            class="q-px-sm"
            :color="'negative'"
            :dense="true"
            :icon="'delete'"
            :noCaps="true"
            :square="true"
            :type="'button'"
            :textColor="'black'"
            v-if="displayActionDelete"
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
import {
  DisplayTableNoDataLabel,
  DisplayTableRowsPerPage,
  DisplayTableTitle,
} from 'src/library/TableOperations';

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
  resourceTitle?: string | undefined;
  resourceDescription?: string | undefined;
  rowsPerPageLabel?: string | undefined;
  rowsPerPageOptions?: number[];
  square: boolean;
  separator: 'horizontal' | 'vertical' | 'cell' | 'none';
  title?: string | undefined;
  wrapCells?: boolean;
}

// Display and format the column name
function displayColumnName(columnName: string): string {
  return CapitalizeFirstLetter(columnName);
}

// Display default no resource data label
const defaultNoDataLabel = function displayResourceNoDataLabel(): string {
  return DisplayTableNoDataLabel();
};

// Display default rows per page option
const defaultRowsPerPageOption =
  function displayResourceRowsPerPage(): number[] {
    return DisplayTableRowsPerPage();
  };

// Display the resource title
function displayResourceTitle(tableTitle: string | undefined): string {
  return DisplayTableTitle(tableTitle);
}

// Emit events for action create, show, edit and delete
defineEmits<{
  (event: 'onActionClickCreateRecord', value: true): void;
  (event: 'onActionClickShowRecord', rowId: number): void;
  (event: 'onActionClickEditRecord', rowId: number): void;
  (event: 'onActionClickDeleteRecord', rowId: number): void;
}>();

withDefaults(defineProps<TableProps>(), {});
</script>

<style lang="scss" scoped>
@import 'src/css/utilities/_rem_convertor.scss';
.table {
  &__top {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    &-title {
      width: inherit;
      font-size: rem-convertor(24px);
      font-weight: 700;
    }
    &-actions {
      display: inherit;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      width: inherit;
    }
  }
  &__header,
  &__body {
    &-column-name,
    &-column-value {
      padding: rem-convertor(4px) !important;
      text-align: center !important;
    }
  }
  &__header {
    height: rem-convertor(32px) !important;
    &-column-name:first-of-type {
      width: rem-convertor(100px);
    }
    &-column-name:last-of-type {
      width: rem-convertor(150px);
    }
  }
}
</style>
