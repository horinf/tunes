import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundPageComponent } from './page-not-found-page.component';

const routes: Routes = [
  { 
    path: '',
    component: PageNotFoundPageComponent,
    pathMatch: 'full',
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundPageRoutingModule { }
