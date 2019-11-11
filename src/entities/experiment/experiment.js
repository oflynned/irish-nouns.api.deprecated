export default function buildMakeExperiment ({ Id }) {
  return function makeExperiment ({
    userId = null,
    createdAt = Date.now(),
    updatedAt = Date.now(),
    id = Id.makeId(),
    category,
    posedNoun,
    answerAttempt,
    correctAnswer
  }) {
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
