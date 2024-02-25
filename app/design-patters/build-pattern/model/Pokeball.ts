import { AbstractPokeball, AbstractPokemon } from "../interface/Pokemon";

export class Pokeball extends AbstractPokeball {
  private pokemon: AbstractPokemon | null;
  private ballType: "normal" | "great" | "ultra" | "master";
  private name!: string;

  constructor(pokemon: AbstractPokemon | null) {
    super();
    this.pokemon = pokemon;
    this.ballType = "normal";
  }

  getName(): string {
    return this.name;
  }

  hasPokemon() {
    return this.pokemon !== null;
  }

  content() {
    return this.pokemon;
  }

  type() {
    return this.ballType;
  }

  setPokemon(pokemon: AbstractPokemon | null) {
    this.pokemon = pokemon;
  }

  setType(type: "normal" | "great" | "ultra" | "master"): void {
    this.ballType = type;
  }

  setName(name: string): void {
    this.name = name;
  }
}
