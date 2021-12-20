import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TuneModel } from 'src/app/model/TuneModel';
import { ModalDialogComponent } from 'src/app/modules/modal-dialog/modal-dialog.component';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-tune-info-dialog',
  templateUrl: './tune-info-dialog.component.html',
  styleUrls: ['./tune-info-dialog.component.scss']
})
export class TuneInfoDialogComponent {
  public isFavorite = false;
  public tune?: TuneModel;

  @ViewChild(ModalDialogComponent, {static: false})
  modalDialog!: ModalDialogComponent;
  
  constructor(
    private favoritesService: FavoritesService,
    private cd: ChangeDetectorRef,
    ) { }

  Show(tune: TuneModel) {
    this.tune = tune;
    this.isFavorite = this.favoritesService.isFavorite(tune.id);

    this.modalDialog.Show();
    this.cd.markForCheck();
  }

  Hide() {
    this.modalDialog.Hide();
  }
}
