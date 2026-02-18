import { Component, inject, input, OnInit, signal } from '@angular/core';
import { SharedSearch } from '../../shared/components/shared-search/shared-search';
import { SharedNoResultsFound } from '../../shared/components/shared-no-results-found/shared-no-results-found';
import { PlayerService } from '../../shared/services/player.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-positions',
  imports: [SharedSearch, SharedNoResultsFound, RouterLink],
  templateUrl: './positions.html',
  styleUrl: './positions.scss',
})
export class Positions implements OnInit {
  sendingPlaceholder = signal('Search position...');
  sendingQuery = signal('');

  playerService = inject(PlayerService);
  positions = signal<string[]>([]);
  filteredBySearch = signal<string[]>([]);

  ngOnInit(): void {
    this.playerService.getAllPositions().subscribe((results) => {
      this.positions.set(results);
      this.filteredBySearch.set(results);
    });
  }

  receiveSearch(position: string) {
    this.sendingQuery.set(position);
    this.filteredBySearch.set(
      this.positions().filter((name) => {
        return name?.toLowerCase().includes(position.toLowerCase());
      }),
    );
  }
}
