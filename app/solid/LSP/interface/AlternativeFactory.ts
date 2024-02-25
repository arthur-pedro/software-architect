import {
  Alternative,
  AnswerType,
  ClosedEndAlternative,
  DiscursiveAlternative,
} from "./Alternative";

export abstract class AlternativeFactory {
  public abstract create(input: { type: AnswerType }): Alternative;
}

export class AlternativeFactoryImpl extends AlternativeFactory {
  public create(input: {
    type: AnswerType;
    isCorrect?: boolean;
    answer?: string;
  }): Alternative {
    switch (input.type) {
      case "closed-end":
        if (input.isCorrect === undefined)
          throw new Error("isCorrect is required for closed-end alternative");
        return new ClosedEndAlternative({ isCorrect: input.isCorrect! });
      case "discurdive":
        if (input.answer === undefined)
          throw new Error("answer is required for discursive alternative");
        return new DiscursiveAlternative({ answer: input.answer! });
      default:
        throw new Error("Invalid pokemon type");
    }
  }
}
