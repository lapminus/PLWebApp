import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPlayerDetail } from './shared-player-detail';

describe('SharedPlayerDetail', () => {
  let component: SharedPlayerDetail;
  let fixture: ComponentFixture<SharedPlayerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedPlayerDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedPlayerDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
