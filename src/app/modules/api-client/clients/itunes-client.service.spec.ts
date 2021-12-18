import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TuneCollection } from 'src/app/model/TuneCollection';
import { ApiClientRequestHandlerService } from '../services/api-client-request-handler.service';
import { ApiClientRouteBuilderService } from '../services/api-client-route-builder.service';

import { ItunesClientService } from './itunes-client.service';

describe('ItunesClientService', () => {
  let service: ItunesClientService;
  let routeBuilderServiceSpy: jasmine.SpyObj<ApiClientRouteBuilderService>;
  let handlerServiceSpy: jasmine.SpyObj<ApiClientRequestHandlerService>;

  beforeEach(() => {
    const routeBuilderSpy = jasmine.createSpyObj('ApiClientRouteBuilderService', ['build']);
    const handlerSpy = jasmine.createSpyObj('ApiClientRequestHandlerService', ['handle']);

    TestBed.configureTestingModule({
      providers: [
        ItunesClientService,
        {
          provide: ApiClientRouteBuilderService,
          useValue: routeBuilderSpy
        },
        {
          provide: ApiClientRequestHandlerService,
          useValue: handlerSpy
        },
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ItunesClientService);
    routeBuilderServiceSpy = TestBed.inject(ApiClientRouteBuilderService) as jasmine.SpyObj<ApiClientRouteBuilderService>;
    handlerServiceSpy = TestBed.inject(ApiClientRequestHandlerService) as jasmine.SpyObj<ApiClientRequestHandlerService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build route, do http request, handle it and return promise', () => {
    routeBuilderServiceSpy.build.withArgs('https://itunes.apple.com', 'us', 'rss', 'topalbums', 'limit=100', 'json').and.returnValue('correct.url');
    const returnVal = new Promise<TuneCollection>((res, rej) => {res({} as TuneCollection)});
    handlerServiceSpy.handle.and.returnValue(returnVal);
    const result = service.getTunes();
    expect(routeBuilderServiceSpy.build.calls.count()).toBe(1);
    expect(handlerServiceSpy.handle.calls.count()).toBe(1);
    expect(result).toBe(returnVal);
  });
});
