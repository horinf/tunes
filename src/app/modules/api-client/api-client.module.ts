import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItunesClientService } from './clients/itunes-client.service';
import { ApiClientRouteBuilderService } from './services/api-client-route-builder.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiClientRequestHandlerService } from './services/api-client-request-handler.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiClientRouteBuilderService,
    ApiClientRequestHandlerService,
    ItunesClientService,
  ]
})
export class ApiClientModule { }
