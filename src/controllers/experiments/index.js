import { createExperiment } from "../../useCases";
import makeLogExperiment from "./logExperiment";
import notFound from "../common/notFound";

const postExperiment = makeLogExperiment({ createExperiment });

const experimentsController = Object.freeze({
  postExperiment,
  notFound
});

export { postExperiment, notFound };
export default experimentsController;
