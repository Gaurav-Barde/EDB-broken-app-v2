import Pokemon from './pages/pokemon/[name]';
import { tableHeadings } from './utils/constants';

export type PokemonName = {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
};

export type PokemonStats = {
  HP: string;
  Attack: string;
  Defense: string;
  'Sp. Attack': string;
  'Sp. Defense': string;
  Speed: string;
};

type TypeOfHeadings = typeof tableHeadings[number];

export type Pokemon = {
  id: number;
  name: PokemonName;
  type: string[];
  stats: {
    [Property in TypeOfHeadings]: string;
  };
};

export type SerializedPokemon = Omit<Pokemon, 'name'> & {
  image: string;
  name: PokemonName['english'];
};
