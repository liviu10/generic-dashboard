export interface StoreStateInterface {
  allRecords?: {
    description: string;
    records: object[];
    title: string;
  } | undefined;
  singleRecord?: {
    description: string;
    records: object[];
    title: string;
  } | undefined;
  resourceTitle: undefined;
  noDataMessage: undefined;
}