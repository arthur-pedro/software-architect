import { LandPokemon, PokemonType } from "../interface/Pokemon";

export class Pikachu extends LandPokemon {
  name(): string {
    return "Pikachu";
  }

  attack(): number {
    return 5;
  }

  defense(): number {
    return 3;
  }

  speed(): number {
    return 7;
  }

  type(): PokemonType {
    return "electric";
  }

  /**
   * @description
   * A presença desse método único em pokemons voadores, faz com que seja melhor
   * aplicar o princípio de segregação de interface (ISP), pois a classe Pidgey não
   * precisa implementar um método runSpeed() que não faz sentido para ela.
   */
  runSpeed(): number {
    return this.speed() * 1.5;
  }
}
