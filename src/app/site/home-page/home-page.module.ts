import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { TuneCardModule } from 'src/app/components/tune-card/tune-card.module';
import { LoadingStateModule } from 'src/app/components/loading-state/loading-state.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LoadingStateModule,
    TuneCardModule,
  ]
})
export class HomePageModule { }
