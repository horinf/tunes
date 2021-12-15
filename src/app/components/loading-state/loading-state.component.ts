import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-state',
  templateUrl: './loading-state.component.html',
  styleUrls: ['./loading-state.component.scss']
})
export class LoadingStateComponent implements OnInit {
  @Input() isLoading: boolean | null;
  @Input() error: string | null;

  constructor() {
    this.isLoading = false;
    this.error = null;
  }

  ngOnInit(): void {
  }

}
