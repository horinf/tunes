import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundPageRoutingModule } from './page-not-found-page-routing.module';
import { PageNotFoundPageComponent } from './page-not-found-page.component';


@NgModule({
  declarations: [
    PageNotFoundPageComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundPageRoutingModule
  ]
})
export class PageNotFoundPageModule { }
