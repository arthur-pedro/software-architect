import {
  Alternative,
  AnswerType,
  ClosedEndAlternative,
  DiscursiveAlternative,
} from "./interface/Alternative";
import {
  AlternativeFactory,
  AlternativeFactoryImpl,
} from "./interface/AlternativeFactory";

export class Main {
  /**
   * @notes
   * O método createAlternative() recebe uma alternativa e deve persisti-la em um local específico.
   * Supondo que eu tenha uma tabela no banco de dados chamada "alternative", onde eu
   * devo persistir todas as alternativas.
   *
   * [Tabela]
   * isCorrect
   * answer
   * type
   */
  public createAlternative(input: {
    answer: string;
    isCorrect: boolean;
    type: AnswerType;
  }): void {
    /**
     * @notes
     * O método incorrectPersist() não está seguindo o princípio de substituição de Liskov (LSP),
     * pois ele está verificando o tipo do pokemon para decidir onde persisti-lo.
     *
     */
    if (input.type === "closed-end") {
      const alternative = new ClosedEndAlternative({
        isCorrect: input.isCorrect,
      });
      this.persist(alternative);
    } else {
      const alternative = new DiscursiveAlternative({ answer: input.answer });
      this.persist(alternative);
    }
  }

  /**
   * @notes
   * O ideal seria usar o padrão de projeto Factory Method para criar os alternativas
   * e o método createCloseEndAlternative() e createDiscursiveAlternative() apenas persisti-la.
   */
  public createCloseEndAlternative(input: { isCorrect: boolean }): void {
    /**
     * @notes
     * Instanciar uma classe concreta diretamente não é uma boa prática. Isto fere o
     * princípio de inversão de dependência (DIP). Mas isso é coisa para outro tópico. :D
     */
    const factory = new AlternativeFactoryImpl();
    const alternative = factory.create({
      type: "closed-end",
      isCorrect: input.isCorrect,
    });
    this.persist(alternative);
  }

  public createDiscursiveAlternative(input: { answer: string }): void {
    /**
     * @notes
     * Instanciar uma classe concreta diretamente não é uma boa prática. Isto fere o
     * princípio de inversão de dependência (DIP). Mas isso é coisa para outro tópico. :D
     */
    const factory = new AlternativeFactoryImpl();
    const alternative = factory.create({
      type: "discurdive",
      answer: input.answer,
    });
    this.persist(alternative);
  }

  private persist(alternative: Alternative): void {
    /** Persistindo na tabela alternativa */
    console.log(alternative);
  }
}
