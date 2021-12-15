import { Component, Input, OnInit } from '@angular/core';
import { TuneModel } from 'src/app/model/TuneModel';

@Component({
  selector: 'app-tune-card',
  templateUrl: './tune-card.component.html',
  styleUrls: ['./tune-card.component.scss']
})
export class TuneCardComponent implements OnInit {
  @Input() tune?: TuneModel;

  constructor() { }

  ngOnInit(): void {
  }

}

