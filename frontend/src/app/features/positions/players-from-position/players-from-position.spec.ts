import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersFromPosition } from './players-from-position';

describe('PlayersFromPosition', () => {
  let component: PlayersFromPosition;
  let fixture: ComponentFixture<PlayersFromPosition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersFromPosition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersFromPosition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
