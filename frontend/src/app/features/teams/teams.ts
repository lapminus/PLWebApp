import { Component, inject, OnInit, signal } from '@angular/core';
import { SharedSearch } from '../../shared/components/shared-search/shared-search';
import { SharedNoResultsFound } from '../../shared/components/shared-no-results-found/shared-no-results-found';
import { PlayerService } from '../../shared/services/player.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teams',
  imports: [SharedSearch, SharedNoResultsFound, RouterLink],
  templateUrl: './teams.html',
  styleUrl: './teams.scss',
})
export class Teams implements OnInit {
  sendingPlaceholder = signal('Search team...');
  sendingQuery = signal('');

  playerService = inject(PlayerService);
  teamNames = signal<string[]>([]);
  filteredBySearch = signal<string[]>([]);

  ngOnInit(): void {
    this.playerService.getAllTeamNames().subscribe((result) => {
      const displayTeams = result.filter((item) => item !== null);
      this.teamNames.set(displayTeams);
      this.filteredBySearch.set(displayTeams);
    });
  }

  receiveSearch(team: string) {
    this.sendingQuery.set(team);
    this.filteredBySearch.set(
      this.teamNames().filter((name) => {
        return name?.toLowerCase().includes(team.toLowerCase());
      }),
    );
  }
}
