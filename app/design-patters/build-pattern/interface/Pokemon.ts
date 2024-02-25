export abstract class AbstractPokemon {
  abstract getName(): string;
}

export abstract class AbstractPokeItem {
  abstract getName(): string;
  abstract setName(name: string): void;
}

export abstract class AbstractBerry extends AbstractPokeItem {
  abstract getName(): string;
}

export abstract class AbstractPokeball extends AbstractPokeItem {
  abstract hasPokemon(): boolean;
  abstract content(): AbstractPokemon | null;
  abstract type(): "normal" | "great" | "ultra" | "master";
  abstract setType(type: "normal" | "great" | "ultra" | "master"): void;
  abstract setPokemon(pokemon: AbstractPokemon | null): void;
}
