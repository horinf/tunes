import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalDialogComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() title?: string;
  @Input() dialogId!: string;

  private isShown = false;

  constructor(
  ) {}

  ngOnInit(): void {
    if (!this.dialogId || this.dialogId.length === 0) {
      console.error('Modal dialog Id is not set!');
    }
  }

  ngAfterViewInit(): void {
      const dialog = $(`#${this.dialogId}`);

      if (dialog) {
        dialog.on('shown.bs.modal', (e: any) => {
          this.onShown();
        });
  
        dialog.on('hidden.bs.modal', (e: any) => {
          this.onHidden();
        });
      }
  }

  ngOnDestroy(): void {
      const dialog = $(`#${this.dialogId}`) as JQuery;
      if (dialog) {
        dialog.off('shown.bs.modal');
        dialog.off('hidden.bs.modal');
        dialog.modal('dispose');
      }
  }

  Show(): void {
    if (this.isShown === true) {
      console.warn('Dialog has already shown');
      return;
    }
    this.isShown = true;
    $(`#${this.dialogId}`).modal('show');
  }

  Hide(): void {
    $(`#${this.dialogId}`).modal('hide');
  }

  private onShown(): void {
    this.isShown = true;
  }

  private onHidden(): void {
    this.isShown = false;
  }
}
