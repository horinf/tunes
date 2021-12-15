import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  readonly FAVORITES_KEY = 'my-favorite-tunes';

  private favorites!: number[];

  constructor() {
    this.load();
  }

  public toggle(tuneId: number): boolean {
    const index = this.favorites.indexOf(tuneId);
    if (index >= 0) {
      this.favorites.splice(index, 1);
      this.save();
      return false;
    } else {
      this.favorites.push(tuneId);
      this.save();
      return true;
    }
  }

  public add(tuneId: number): void {
    if (!this.isFavorite) {
      this.favorites.push(tuneId);
      this.save();
    }
  }

  public remove(tuneId: number): void {
    const index = this.favorites.indexOf(tuneId);
    if (index >= 0) {
      this.favorites.splice(index, 1);
      this.save();
    }
  }

  public isFavorite(tuneId: number): boolean {
    const index = this.favorites.indexOf(tuneId);
    return index >= 0;
  }

  private load(): void {
    try {
      const favsString = localStorage.getItem(this.FAVORITES_KEY);
      if (favsString) {
        this.favorites = JSON.parse(favsString);
      } else {
        this.favorites = new Array<number>();
      }
    } catch (error) {
      console.warn('Unable to load favorite tunes from storage, probably your brouser does not support localstorage');
      this.favorites = new Array<number>();
    }
  }

  private save(): void {
    try {
      const favsString = JSON.stringify(this.favorites);
      localStorage.setItem(this.FAVORITES_KEY, favsString);
    } catch (error) {
      console.warn('Unable to store favorite tunes, probably your brouser does not support localstorage');
    }
  }


}
