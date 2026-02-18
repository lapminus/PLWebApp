import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedToast } from './shared-toast';

describe('SharedToast', () => {
  let component: SharedToast;
  let fixture: ComponentFixture<SharedToast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedToast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedToast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
