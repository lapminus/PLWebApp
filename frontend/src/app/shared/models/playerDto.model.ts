export interface PlayerDto {
  id: number;
  playerName: string;
  nation: string;
  pos: string;
  age: number;
  matchesPlayed: number;
  starts: number;
  minutesPlayed: number;
  goals: number;
  assists: number;
  penaltiesScored: number;
  yellowCards: number;
  redCards: number;
  expectedGoals: number;
  expectedAssists: number;
  teamName: string;
}
