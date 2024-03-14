export interface HttpResponseEntity<i> {
  code: number;
  message: string;
  timestamp: number;
  data: i;
}
