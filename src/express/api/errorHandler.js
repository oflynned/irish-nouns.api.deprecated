import createError from "http-errors";

const logger = require("../../config/loggerConfig");
const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : "combined";

const mapHandler = (app, morgan) => {
  app.use(
    morgan(morganFormat, {
      skip: (req, res) => res.statusCode < 400,
      stream: process.stderr
    })
  );

  app.use(
    morgan(morganFormat, {
      skip: (req, res) => res.statusCode >= 400,
      stream: process.stdout
    })
  );

  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use((err, req, res, next) => {
    if (res.headersSent) {
      next(err);
      return;
    }

    logger.error(err.message, { url: req.originalUrl });

    res.status(500);
    res.json({ error: err.message });
  });

  return app;
};

export default mapHandler;
