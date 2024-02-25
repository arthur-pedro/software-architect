import { AbstractPokemon } from "../interface/Pokemon";

export class Pokemon extends AbstractPokemon {
  private name!: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
