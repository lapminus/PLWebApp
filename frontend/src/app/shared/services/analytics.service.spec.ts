import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AnalyticsService } from './analytics.service';

describe('AnalyticsService', () => {
  let service: AnalyticsService;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', [], {
      events: {
        pipe: () => ({
          subscribe: () => {}
        })
      }
    });

    TestBed.configureTestingModule({
      providers: [
        AnalyticsService,
        { provide: Router, useValue: mockRouter }
      ]
    });
    service = TestBed.inject(AnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
