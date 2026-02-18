import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersFromTeam } from './players-from-team';

describe('PlayersFromTeam', () => {
  let component: PlayersFromTeam;
  let fixture: ComponentFixture<PlayersFromTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersFromTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersFromTeam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
