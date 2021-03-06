import { Observable } from 'rxjs';

export interface FsValuesFunction {
  <T>(): Observable<T> | Promise<T> | T[]
}
