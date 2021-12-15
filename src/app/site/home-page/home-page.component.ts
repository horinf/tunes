import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TuneModel } from 'src/app/model/TuneModel';
import { ItunesClientService } from 'src/app/modules/api-client/clients/itunes-client.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public isLoading$ = new BehaviorSubject<boolean>(true);
  public error$ = new BehaviorSubject<string | null>(null);
  public tunes = new BehaviorSubject<TuneModel[] | null>(null);

  private unsubscriber = new Subscription();

  constructor(
    private itunesClient: ItunesClientService,
    ) { }

  async ngOnInit(): Promise<void> {
    this.loadItunes();
  }

  ngOnDestroy(): void {
    if (this.unsubscriber) {
      this.unsubscriber.unsubscribe();
    }
  }

  private async loadItunes() {
    this.isLoading$.next(true);
    this.error$.next(null);
    try {
      const tuneCollection = await this.itunesClient.getTunes();
      if (tuneCollection) {
        this.tunes.next(tuneCollection.tunes);
      }
    } catch (error) {
      this.error$.next('An error occured while loading your tunes (');
    } finally {
      this.isLoading$.next(false);
    }
  }
}
