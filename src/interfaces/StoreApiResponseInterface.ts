export interface StoreApiResponseInterface {
  config: object;
  data: {
    description?: string;
    records?: object[];
    title?: string;
  } | undefined;
  headers: object;
  request: object;
  status: number;
  statusText: string;
}
