import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersFromNation } from './players-from-nation';

describe('PlayersFromNation', () => {
  let component: PlayersFromNation;
  let fixture: ComponentFixture<PlayersFromNation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersFromNation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersFromNation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
