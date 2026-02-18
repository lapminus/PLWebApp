import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPlayerSummary } from './shared-player-summary';

describe('SharedPlayerSummary', () => {
  let component: SharedPlayerSummary;
  let fixture: ComponentFixture<SharedPlayerSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedPlayerSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedPlayerSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
