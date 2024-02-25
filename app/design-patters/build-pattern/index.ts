import { PokeItemBuilder } from "./interface/PokeItemBuilder";
import { PokeballBuilder } from "./interface/PokeballBuilder";
import { PokemonTrainerBagBuilder } from "./interface/PokemonTrainerBagBuilder";
import { Pokeball } from "./model/Pokeball";
import { Pokemon } from "./model/Pokemon";

class Main {
  public static run(): void {
    /**
     * @notes
     * Com esse padrão, evita-se a instancia de classes concretas diretamente na regra de negócio.
     * A instanciação de classes concretas é feita por meio de classes de construção.
     * Esta abordagem é usada em casos de construtores complexos, onde a instanciação direta de classes
     * concretas pode ser confusa e propensa a erros.
     */
    const pokeballBuilder = new PokeballBuilder();
    pokeballBuilder.addPokemon(null);
    pokeballBuilder.addType("normal");
    const pokeball = pokeballBuilder.getPokeball();

    const itemBuilder = new PokeItemBuilder();
    itemBuilder.addName("Barry");
    const berry = itemBuilder.getPokeItem();

    /**
     * Exemplo de como adicionar mais pokebolas a
     * bolsa mesmo não usando builder para criar uma pokebola
     * */
    const pidgey = new Pokemon("Pidgey");
    const masterBall = new Pokeball(pidgey);
    masterBall.setType("master");
    masterBall.setName("Master Ball");

    const bagBuilder = new PokemonTrainerBagBuilder();
    bagBuilder.addPokeball(pokeball);
    bagBuilder.addPokeball(masterBall);
    bagBuilder.addBerry(berry);
    const bag = bagBuilder.getBag();

    console.dir(bag.items);
  }
}

Main.run();
