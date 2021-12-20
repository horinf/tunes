import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TuneModel } from '../model/TuneModel';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private _tuneInfoSubject = new Subject<TuneModel>();
  public readonly tuneInfo$: Observable<TuneModel> = this._tuneInfoSubject.asObservable();
  
  constructor() { }

  showTuneInfo(tune: TuneModel): void {
    this._tuneInfoSubject.next(tune);
  }
}
