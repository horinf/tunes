import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TuneSearchService {
  public searchString$ = new BehaviorSubject<string | null>(null);

  private searchTimer?: any;

  constructor() { }

  changeSearchString(searchString: string | null) {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    this.searchTimer = setTimeout(() => {
        this.searchTimer = undefined;
        this.searchString$.next(searchString);
    }, 500);
  }
}
