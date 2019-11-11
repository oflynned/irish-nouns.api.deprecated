import makeExperiment from "../entities/experiment";

export default function makeCreateExperiment ({ experimentsDb }) {
  return async function createExperiment (experimentInfo) {
    const experiment = makeExperiment(experimentInfo);
    return experimentsDb.insert({
      userId: experiment.getUserId(),
      createdAt: experiment.getCreatedAt(),
      updatedAt: experiment.getUpdatedAt(),
      id: experiment.getId(),
      category: experiment.getCategory(),
      posedNoun: experiment.getPosedNoun(),
      answerAttempt: experiment.getAnswerAttempt(),
      correctAnswer: experiment.getCorrectAnswer()
    });
  };
}
