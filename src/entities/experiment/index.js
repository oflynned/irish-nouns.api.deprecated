export default function buildMakeExperiment ({ Id, makeSource }) {
  return function makeExperiment ({
    userId,
    createdAt = Date.now(),
    updatedAt = Date.now(),
    id = Id.makeId(),
    category,
    posedNoun,
    answerAttempt,
    correctAnswer
  }) {
    // TODO implement Joi to validate payload
    if (!Id.isValid()) {
      throw new Error("Id is not valid");
    }

    return Object.freeze({
      getUserId: () => userId,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
      getId: () => id,
      getCategory: () => category,
      getPosedNoun: () => posedNoun,
      getAnswerAttempt: () => answerAttempt,
      getCorrectAnswer: () => correctAnswer,
      isAnswerCorrect: () => correctAnswer === answerAttempt
    });
  };
}
