import { Component, inject, OnInit, signal } from '@angular/core';
import { PlayerService } from '../../../shared/services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerSummaryDto } from '../../../shared/models/playerSummaryDto.model';
import { finalize } from 'rxjs';
import { SharedNoResultsFound } from '../../../shared/components/shared-no-results-found/shared-no-results-found';
import { SharedPlayerSummary } from '../../../shared/components/shared-player-summary/shared-player-summary';
import { SharedPagination } from '../../../shared/components/shared-pagination/shared-pagination';

@Component({
  selector: 'app-players-from-position',
  imports: [SharedNoResultsFound, SharedPlayerSummary, SharedPagination],
  templateUrl: './players-from-position.html',
  styleUrl: './players-from-position.scss',
})
export class PlayersFromPosition implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  playerService = inject(PlayerService);

  isLoading = signal(true);
  hasError = signal(false);

  sendingPlayers = signal<PlayerSummaryDto[]>([]);
  sendingQuery = signal('');

  sendingPages = signal<number>(0);
  sendingCurrentPage = signal<number>(0);

  // ngOnInit is not activting code once
  // ngOnInit is activating setup once, and the code can run forever
  ngOnInit(): void {
    // console.log("INIT")
    // observable lives independantly of ngOnInit activates. 
    // gets called when queryParams changes
    this.route.queryParamMap.subscribe((params) => {
      const page = Number(params.get('page'));
      const position = this.route.snapshot.paramMap.get('position') ?? undefined;

      this.sendingQuery.set(`${position}?page=${page}`);

      this.playerService
        .searchPlayersBy({ position, page })
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: (result) => {
            (this.sendingPlayers.set(result.content),
              this.sendingPages.set(result.totalPages),
              this.sendingCurrentPage.set(result.number));
            // console.log("THIS IS ACTIVATED EVEN THO INIT IS NOT")
          },
          error: () => this.hasError.set(true),
        });
    });
  }

  receivePageChanged(page: number) {
    // console.log("FIRE")
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'replace',
    });
  }
}
