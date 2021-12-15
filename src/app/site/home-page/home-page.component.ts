import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TuneModel } from 'src/app/model/TuneModel';
import { ItunesClientService } from 'src/app/modules/api-client/clients/itunes-client.service';
import { TuneSearchService } from 'src/app/services/tune-search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public isLoading$ = new BehaviorSubject<boolean>(true);
  public error$ = new BehaviorSubject<string | null>(null);
  public tunes = new BehaviorSubject<TuneModel[] | null>(null);

  private allTunes?: TuneModel[];
  private unsubscriber = new Subscription();

  constructor(
    private itunesClient: ItunesClientService,
    private tuneSearchService: TuneSearchService,
    ) { }

  async ngOnInit(): Promise<void> {
    this.loadItunes();
    this.unsubscriber.add(
      this.tuneSearchService.searchString$.subscribe(searchString => {
        this.search(searchString);
      })
    );
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
        this.allTunes = tuneCollection.tunes;
        this.tunes.next(tuneCollection.tunes);
      }
    } catch (error) {
      this.error$.next('An error occured while loading your tunes (');
    } finally {
      this.isLoading$.next(false);
    }
  }

  private search(searchString: string | null) {
    if (!this.allTunes) {
      return;
    }

    if (!searchString) {
      this.tunes.next(this.allTunes);
      return;
    }

    const lowered = searchString.toLowerCase();
    const filteredTunes = this.allTunes.filter(x => x.title.toLowerCase().indexOf(lowered) >= 0 || x.artist.toLowerCase().indexOf(lowered) >= 0);
    this.tunes.next(filteredTunes);
  }
}
