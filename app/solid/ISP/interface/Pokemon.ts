export type PokemonType =
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "flying"
  | "normal"
  | "fighting"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy";

export abstract class Pokemon {
  abstract name(): string;
  abstract attack(): number;
  abstract defense(): number;
  abstract speed(): number;
  abstract type(): PokemonType;
}

export abstract class FlyPokemon extends Pokemon {
  abstract flySpeed(): number;
}

export abstract class LandPokemon extends Pokemon {
  abstract runSpeed(): number;
}
