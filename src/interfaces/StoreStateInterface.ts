export interface StoreStateInterface {
  allRecords?: {
    description?: string;
    records?: object[];
    title?: string;
  } | undefined;
  singleRecord?: {
    description?: string;
    records?: object[];
    title?: string;
  } | undefined;
  resourceTitle?: string | undefined;
  resourceDescription?: string | undefined;
  noDataMessage?: string | undefined;
}