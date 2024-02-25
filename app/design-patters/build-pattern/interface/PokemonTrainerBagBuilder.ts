import { PokemonTrainerBag } from "../model/PokemonTrainer";
import { AbstractBerry, AbstractPokeball } from "./Pokemon";

export class PokemonTrainerBagBuilder {
  private bag!: PokemonTrainerBag;

  constructor() {
    this.bag = this.createBag();
  }

  createBag(): PokemonTrainerBag {
    return new PokemonTrainerBag();
  }

  addPokeball(pokeball: AbstractPokeball): void {
    this.bag.items.push(pokeball);
  }

  addBerry(berry: AbstractBerry): void {
    this.bag.items.push(berry);
  }

  getBag(): PokemonTrainerBag {
    return this.bag;
  }
}
