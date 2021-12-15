import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiClientRequestHandlerService } from '../services/api-client-request-handler.service';
import { ApiClientRouteBuilderService } from '../services/api-client-route-builder.service';

import { ItunesClientService } from './itunes-client.service';

describe('ItunesClientService', () => {
  let service: ItunesClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItunesClientService,
        ApiClientRouteBuilderService,
        ApiClientRequestHandlerService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ItunesClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
