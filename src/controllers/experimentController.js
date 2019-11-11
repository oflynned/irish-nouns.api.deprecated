import Experiment from "../models/experiment";

export const createExperiment = async ({ body }) => Experiment.create(body).save();
