import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public readonly $isLoading = new BehaviorSubject<boolean>(false);

  constructor() { }
}
