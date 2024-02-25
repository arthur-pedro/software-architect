import { Pokeball } from "../model/Pokeball";
import { AbstractPokemon } from "./Pokemon";

export class PokeballBuilder {
  private pokeball: Pokeball;

  constructor() {
    this.pokeball = this.createPokeball();
  }

  createPokeball() {
    return new Pokeball(null);
  }

  addType(type: "normal" | "great" | "ultra" | "master") {
    this.pokeball.setType(type);
  }

  addPokemon(pokemon: AbstractPokemon | null) {
    this.pokeball.setPokemon(pokemon);
  }

  getPokeball() {
    return this.pokeball;
  }
}
