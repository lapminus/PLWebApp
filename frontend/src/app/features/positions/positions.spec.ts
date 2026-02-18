import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Positions } from './positions';

describe('Positions', () => {
  let component: Positions;
  let fixture: ComponentFixture<Positions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Positions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Positions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
