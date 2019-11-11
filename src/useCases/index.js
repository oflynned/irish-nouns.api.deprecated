import experimentsDb from "../dataAccess";
import makeCreateExperiment from "./createExperiment";

const createExperiment = makeCreateExperiment({ experimentsDb });

const experimentService = Object.freeze({
  createExperiment
});

export { createExperiment };
export default experimentService;
