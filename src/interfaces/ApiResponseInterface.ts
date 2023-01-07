export interface ApiResponseInterface {
  config: object;
  data: {
    description: string;
    records: object[];
    title: string;
  };
  headers: object;
  request: object;
  status: number;
  statusText: string;
}