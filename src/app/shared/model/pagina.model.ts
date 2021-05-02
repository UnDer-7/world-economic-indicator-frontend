export interface Page<T> {
  page: number;
  pageTotal: number;
  pageSize: number;
  total: number;
  list: T[];
}
