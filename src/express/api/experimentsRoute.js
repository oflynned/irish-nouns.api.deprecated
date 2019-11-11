import config from "../../config/environmentConfig";
import makeCallback from "../callback";

import { postExperiment, notFound } from "../../controllers/experiments";

const apiRoot = config.apiRoot;

const mapRoutes = app => {
  app.post(`${apiRoot}/experiments`, makeCallback(postExperiment));
  app.use(makeCallback(notFound));

  return app;
};

export default mapRoutes;
