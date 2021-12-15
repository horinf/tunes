import { Component, OnInit } from '@angular/core';
import { TuneSearchService } from 'src/app/services/tune-search.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  public searchString?: string;

  constructor(
    private tuneSearchService: TuneSearchService,
    ) { }

  ngOnInit(): void {
  }

  search(): void {
    this.tuneSearchService.changeSearchString(this.searchString ?? null)
  }
}
