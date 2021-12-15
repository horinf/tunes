import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./site/home-page/home-page.module').then(m => m.HomePageModule),
    pathMatch: 'full',
  },
  { 
    path: '404',
    loadChildren: () => import('./site/page-not-found-page/page-not-found-page.module').then(m => m.PageNotFoundPageModule),
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private router: Router,
    ) {
      this.router.errorHandler = (error: any) => {
        console.warn(error?.message);
        router.navigate(['/404']);
      };
    }
}
