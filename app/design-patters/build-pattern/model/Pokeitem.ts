import { AbstractPokeItem } from "../interface/Pokemon";

export class PokeItem extends AbstractPokeItem {
  private name!: string;

  constructor() {
    super();
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}
