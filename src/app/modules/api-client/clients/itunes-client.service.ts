import { Injectable } from '@angular/core';
import { ApiClientRouteBuilderService } from '../services/api-client-route-builder.service';
import { HttpClient } from '@angular/common/http';
import { ApiClientRequestHandlerService } from '../services/api-client-request-handler.service';
import { tuneFeedMapper } from "../mappers/tuneFeed.mapper";
import { TuneCollection } from 'src/app/model/TuneCollection';

@Injectable()
export class ItunesClientService {

  private urls = {
    itunes: 'https://itunes.apple.com',
  };

  constructor(
    private routeBuilder: ApiClientRouteBuilderService,
    private requestHandler: ApiClientRequestHandlerService,
    private http: HttpClient,
  ) { }

  public getTunes(): Promise<TuneCollection | null> {
    const url = this.routeBuilder.build(this.urls.itunes, 'us', 'rss', 'topalbums', 'limit=100', 'json');
    var request = this.http.get(url);
    return this.requestHandler.handle<TuneCollection | null>(request, tuneFeedMapper)
  }
}
