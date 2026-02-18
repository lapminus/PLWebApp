import { KeyValuePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { SharedNoResultsFound } from '../shared-no-results-found/shared-no-results-found';
import { PlayerDto } from '../../models/playerDto.model';
import { finalize } from 'rxjs';
import { PlayerService } from '../../services/player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared-player-detail',
  imports: [KeyValuePipe, SharedNoResultsFound],
  templateUrl: './shared-player-detail.html',
  styleUrl: './shared-player-detail.scss',
})
export class SharedPlayerDetail implements OnInit {
  playerService = inject(PlayerService);
  route = inject(ActivatedRoute);

  sendingQuery = signal<string | number>('');
  isLoading = signal<boolean>(true);
  hasError = signal<boolean>(false);

  player = signal<PlayerDto | null>(null);
  excludeFields = ['playerName', 'id'];

  ngOnInit(): void {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));
    this.sendingQuery.set(playerId);

    this.playerService
      .searchPlayerById(playerId)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (res) => this.player.set(res),
        error: () => this.hasError.set(true),
      });
  }
}
