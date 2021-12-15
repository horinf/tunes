import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TuneModel } from 'src/app/model/TuneModel';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-tune-card',
  templateUrl: './tune-card.component.html',
  styleUrls: ['./tune-card.component.scss']
})
export class TuneCardComponent implements OnInit {
  public isFavorite$ = new BehaviorSubject<boolean>(false);

  @Input()
  set tune(val: TuneModel | undefined){
    this._tune = val;
    if (val) {
      const isFav = this.favoritesService.isFavorite(val?.id);
      this.isFavorite$.next(isFav);
    }
  }
  get tune(): TuneModel | undefined {
    return this._tune;
  }

  private _tune?: TuneModel;

  constructor(
    private favoritesService: FavoritesService
    ) { }

  ngOnInit(): void {
  }

  cardClick() {
    if (!this._tune) {
      return;
    }

    const isFav = this.favoritesService.toggle(this._tune.id); 
    this.isFavorite$.next(isFav);
  }
}

