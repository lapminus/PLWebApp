import { Component, inject, OnInit, signal } from '@angular/core';
import { SharedSearch } from '../../shared/components/shared-search/shared-search';
import { PlayerService } from '../../shared/services/player.service';
import { SharedNoResultsFound } from '../../shared/components/shared-no-results-found/shared-no-results-found';
import { RouterLink } from '@angular/router';
import { NATION_FLAG_MAP } from '../../shared/models/nation-flag.map';

@Component({
  selector: 'app-nations',
  imports: [SharedSearch, SharedNoResultsFound, RouterLink],
  templateUrl: './nations.html',
  styleUrl: './nations.scss',
})
export class Nations implements OnInit {
  sendingPlaceholder = signal('Search nation...');
  playerService = inject(PlayerService);

  sendingQuery = signal('');
  nations = signal<string[]>([]);
  filteredBySearch = signal<string[]>([]);

  ngOnInit(): void {
    this.playerService.getAllNations().subscribe((result) => {
      const displayNames = result.filter((item) => item !== null).map((item) => item.split(' ')[1]);
      this.nations.set(displayNames);
      this.filteredBySearch.set(displayNames);
    });
  }

  receiveSearch(nation: string) {
    this.sendingQuery.set(nation);
    this.filteredBySearch.set(
      this.nations().filter((name) => {
        return name?.toLowerCase().includes(nation.toLowerCase());
      }),
    );
  }

  getFlagUrl(nationCode: string): string {
    const flagCode = NATION_FLAG_MAP[nationCode];
    return flagCode ? `https://flagcdn.com/256x192/${flagCode}.png` : 'UNKNOWN-FLAG-CODE';
  }
}
