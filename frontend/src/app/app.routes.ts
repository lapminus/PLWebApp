import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./features/players/players').then((m) => m.Players);
    },
  },
  {
    path: 'players',
    loadComponent: () => {
      return import('./features/players/players').then((m) => m.Players);
    },
  },
  {
    path: 'player/:id',
    loadComponent: () => {
      return import('./shared/components/shared-player-detail/shared-player-detail').then(
        (m) => m.SharedPlayerDetail,
      );
    },
  },
  {
    path: 'team/:teamName',
    loadComponent: () => {
      return import('./features/teams/players-from-team/players-from-team').then(
        (m) => m.PlayersFromTeam,
      );
    },
  },
  {
    path: 'teams',
    loadComponent: () => {
      return import('./features/teams/teams').then((m) => m.Teams);
    },
  },
  {
    path: 'nation/:nation',
    loadComponent: () => {
      return import('./features/nations/players-from-nation/players-from-nation').then(
        (m) => m.PlayersFromNation,
      );
    },
  },
  {
    path: 'nations',
    loadComponent: () => {
      return import('./features/nations/nations').then((m) => m.Nations);
    },
  },
  {
    path: 'position/:position',
    loadComponent: () => {
      return import('./features/positions/players-from-position/players-from-position').then(
        (m) => m.PlayersFromPosition,
      );
    },
  },
  {
    path: 'positions',
    loadComponent: () => {
      return import('./features/positions/positions').then((m) => m.Positions);
    },
  },
];
