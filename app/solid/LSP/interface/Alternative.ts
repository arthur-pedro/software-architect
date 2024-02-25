export type AnswerType = "closed-end" | "discurdive";

export abstract class Alternative {
  abstract type(): AnswerType;
}

export class DiscursiveAlternative extends Alternative {
  constructor(
    private props: {
      answer: string;
    }
  ) {
    super();
  }

  type(): AnswerType {
    return "discurdive";
  }

  public get answer(): string {
    return this.props.answer;
  }
}

export class ClosedEndAlternative extends Alternative {
  constructor(
    private props: {
      isCorrect: boolean;
    }
  ) {
    super();
  }

  type(): AnswerType {
    return "closed-end";
  }

  public get isCorrect(): boolean {
    return this.props.isCorrect;
  }
}
