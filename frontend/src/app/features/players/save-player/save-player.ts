import { Component, effect, inject, input, model, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerService } from '../../../shared/services/player.service';
import { PlayerDto } from '../../../shared/models/playerDto.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-player',
  imports: [FormsModule, CommonModule],
  templateUrl: './save-player.html',
  styleUrl: './save-player.scss',
})
export class SavePlayer implements OnInit {
  playerService = inject(PlayerService);
  isModalOpen = model(false);
  receivedEditedId = input<number>();
  formErrors = signal<Record<string, string>>({});

  newPlayer: Partial<PlayerDto> = { nation: '' };
  playerSaved = output<{ player: PlayerDto; type: 'Create' | 'Edit' }>();

  nations = signal<string[]>([]);
  positions = ['MF', 'DF', 'GK', 'FW'];

  showMoreStats = signal(false);

  ngOnInit(): void {
    this.displayNations();
  }

  constructor() {
    effect(() => {
      const editId = this.receivedEditedId();
      if (editId !== -1) {
        this.playerService.searchPlayerById(Number(editId)).subscribe((player) => {
          this.newPlayer = { ...player, nation: player.nation ?? '' };
          this.openCreatePlayerModal();
        });
      }
    });
  }

  openCreatePlayerModal() {
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden'; // Probably not best practice
  }

  closeCreatePlayerModal() {
    this.isModalOpen.set(false);
    this.newPlayer = { nation: '' };
    this.formErrors.set({});
    this.showMoreStats.set(false);
    document.body.style.overflow = 'visible';
  }

  togglePosition(pos: string) {
    if (!this.newPlayer.pos) {
      this.newPlayer.pos = pos;
    } else {
      const current = this.newPlayer.pos.split(',');
      if (current.includes(pos)) {
        this.newPlayer.pos = current.filter((p) => p !== pos).join(',');
      } else {
        current.push(pos);
        this.newPlayer.pos = current.join(',');
      }
    }
  }

  toggleMoreStats() {
    this.showMoreStats.update((v) => !v);
  }

  isPositionSelected(pos: string): boolean {
    return this.newPlayer.pos?.split(',').includes(pos) ?? false;
  }

  submitPlayer() {
    const editId = this.receivedEditedId();
    const operation =
      editId !== -1
        ? this.playerService.editPlayer(this.newPlayer as PlayerDto, Number(editId))
        : this.playerService.createPlayer(this.newPlayer as PlayerDto);

    operation.subscribe({
      next: (player) => {
        ((this.newPlayer = {}),
          this.formErrors.set({}),
          this.playerSaved.emit({ player, type: editId !== -1 ? 'Edit' : 'Create' }),
          this.closeCreatePlayerModal());
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 400 && err.error) {
          this.formErrors.set(err.error);
        } else {
          this.formErrors.set({ 'General error': 'Something went wrong.' });
        }
      },
    });
  }

  private displayNations() {
    this.playerService.getAllNations().subscribe((result) => {
      const displayName = result.filter((item) => item !== null && item !== '').sort();
      this.nations.set(displayName);
    });
  }
}
