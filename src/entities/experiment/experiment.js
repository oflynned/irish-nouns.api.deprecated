export default function buildMakeExperiment ({ Id, makeSource }) {
  return function makeExperiment ({
    userId,
    createdAt = Date.now(),
    updatedAt = Date.now(),
    id = Id.makeId(),
    category,
    posedNoun,
    answerAttempt,
    correctAnswer,
    source
  }) {
    // TODO implement Joi to validate payload instead of manual
    if (!Id.isValid()) {
      throw new Error("Id is not valid");
    }

    const validSource = makeSource(source);
    return Object.freeze({
      getUserId: () => userId,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
      getId: () => id,
      getCategory: () => category,
      getPosedNoun: () => posedNoun,
      getAnswerAttempt: () => answerAttempt,
      getCorrectAnswer: () => correctAnswer,
      getSource: () => validSource,
      isAnswerCorrect: () => correctAnswer === answerAttempt
    });
  };
}
