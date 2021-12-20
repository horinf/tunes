import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuneInfoDialogComponent } from './tune-info-dialog.component';
import { ModalDialogModule } from 'src/app/modules/modal-dialog/modal-dialog.module';

@NgModule({
  declarations: [
    TuneInfoDialogComponent
  ],
  imports: [
    CommonModule,
    ModalDialogModule,
  ],
  exports: [
    TuneInfoDialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TuneInfoDialogModule { }
