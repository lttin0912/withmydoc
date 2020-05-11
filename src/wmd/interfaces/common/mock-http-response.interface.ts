export interface MockHttpResponse<T> {
  body: T | null;
  status: number;
}
