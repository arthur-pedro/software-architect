import { AbstractPokeItem } from "../interface/Pokemon";

export class PokemonTrainerBag {
  items: AbstractPokeItem[];

  constructor() {
    this.items = [];
  }
}

export class PokemonTrainer {
  private bag: PokemonTrainerBag;

  constructor(bag: PokemonTrainerBag) {
    this.bag = bag;
  }

  getBag(): PokemonTrainerBag {
    return this.bag;
  }
}
