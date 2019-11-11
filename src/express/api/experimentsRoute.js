import makeCallback from "../callback";
import {
  deleteComment,
  getComments,
  notFound,
  postComment,
  patchComment
} from "../../controllers";

const apiRoot = process.env.API_ROOT;

const mapRoutes = app => {
  app.post(`${apiRoot}/comments`, makeCallback(postComment));

  app.get(`${apiRoot}/comments`, makeCallback(getComments));

  app.patch(`${apiRoot}/comments/:id`, makeCallback(patchComment));
  app.patch(`${apiRoot}/comments`, makeCallback(patchComment));

  app.delete(`${apiRoot}/comments/:id`, makeCallback(deleteComment));
  app.delete(`${apiRoot}/comments`, makeCallback(deleteComment));

  app.use(makeCallback(notFound));
};

export default mapRoutes;
