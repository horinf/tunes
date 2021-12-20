import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItunesClientService } from 'src/app/modules/api-client/clients/itunes-client.service';
import { ApiClientRequestHandlerService } from 'src/app/modules/api-client/services/api-client-request-handler.service';
import { ApiClientRouteBuilderService } from 'src/app/modules/api-client/services/api-client-route-builder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomePageComponent } from './home-page.component';
import { LoadingStateModule } from 'src/app/components/loading-state/loading-state.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    const itunesClientService = {};
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [
        {
          provide: ItunesClientService,
          useValue: itunesClientService
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
