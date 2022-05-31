export interface Leaderboard {
  nextPage: number;
  sort: number;
  entries: [
    {
      id: string;
      name: string;
      score: number;
      pic: string;
      rank: number;
    }
  ];
}
