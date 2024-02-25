import { PokeItem } from "../model/Pokeitem";

export class PokeItemBuilder {
  private pokeItem: PokeItem;

  constructor() {
    this.pokeItem = this.createPokeItem();
  }

  createPokeItem(): PokeItem {
    return new PokeItem();
  }

  addName(name: string): void {
    this.pokeItem.setName(name);
  }

  getPokeItem(): PokeItem {
    return this.pokeItem;
  }
}
