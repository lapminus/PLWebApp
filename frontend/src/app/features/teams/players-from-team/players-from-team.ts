import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../../shared/services/player.service';
import { PlayerSummaryDto } from '../../../shared/models/playerSummaryDto.model';
import { SharedNoResultsFound } from '../../../shared/components/shared-no-results-found/shared-no-results-found';
import { finalize } from 'rxjs';
import { SharedPlayerSummary } from '../../../shared/components/shared-player-summary/shared-player-summary';
import { SharedPagination } from '../../../shared/components/shared-pagination/shared-pagination';

@Component({
  selector: 'app-players-from-team',
  imports: [SharedNoResultsFound, SharedPlayerSummary, SharedPagination],
  templateUrl: './players-from-team.html',
  styleUrl: './players-from-team.scss',
})
export class PlayersFromTeam implements OnInit {
  playerService = inject(PlayerService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  isLoading = signal(true);
  hasError = signal(false);

  sendingQuery = signal('');
  sendingPlayers = signal<PlayerSummaryDto[]>([]);

  sendingPages = signal<number>(0);
  sendingCurrentPage = signal<number>(0);

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const page = Number(params.get('page'));
      const team = this.route.snapshot.paramMap.get('teamName') ?? undefined;
      this.sendingQuery.set(`${team}?page=${page}`);

      this.playerService
        .searchPlayersBy({ team, page })
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: (result) => {
            (this.sendingPlayers.set(result.content),
              this.sendingPages.set(result.totalPages),
              this.sendingCurrentPage.set(result.number));
          },
          error: () => this.hasError.set(true),
        });
    });
  }

  receivePageChanged(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'replace',
    });
  }
}
