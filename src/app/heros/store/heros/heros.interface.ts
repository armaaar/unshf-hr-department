export interface Hero {
  id:  number,
  name: string;
  powers: string[];
  rate: number;
  description?: string;
  photo?: URL;
}

export interface HerosState {
  heros: Hero[];
}
