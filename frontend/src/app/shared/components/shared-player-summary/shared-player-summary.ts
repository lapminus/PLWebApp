import { Component, inject, input, output } from '@angular/core';
import { PlayerSummaryDto } from '../../models/playerSummaryDto.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-shared-player-summary',
  imports: [RouterLink, CommonModule],
  templateUrl: './shared-player-summary.html',
  styleUrl: './shared-player-summary.scss',
})
export class SharedPlayerSummary {
  playerService = inject(PlayerService);
  receivedPlayers = input.required<PlayerSummaryDto[]>();
  playerDeleted = output<number>();
  playerEdited = output<number>();

  clickedDelete(playerId: number) {
    this.playerService.deletePlayer(playerId).subscribe({
      next: () => this.playerDeleted.emit(playerId),
      error: (err) => console.log(`Could not delete ${err}`),
    });
  }

  clickedEdit(playerId: number) {
    this.playerEdited.emit(playerId);
  }
}
