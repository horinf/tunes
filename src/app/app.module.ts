import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ApiClientModule } from './modules/api-client/api-client.module';
import { SiteHeaderModule } from './modules/site-header/site-header.module';
import { SiteFooterModule } from './modules/site-footer/site-footer.module';
import { TuneInfoDialogModule } from './components/tune-info-dialog/tune-info-dialog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ApiClientModule,
    SiteHeaderModule,
    SiteFooterModule,
    TuneInfoDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
