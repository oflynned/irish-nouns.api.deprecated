import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import environmentConfig from "../config/environmentConfig";

import mapRoutesToApp from "./api";
import mapHandler from "./api/errorHandler";

let app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());

mapRoutesToApp(app);
mapHandler(app, morgan);

function setPort (port) {
  if (!port) {
    throw new Error("no port configured!");
  }

  app.set("port", parseInt(port, 10));
}

async function listen () {
  const port = app.get("port") || environmentConfig.port;
  app = app.listen(port, () => {
    console.log(`The server is running and listening at http://localhost:${port}`);
  });
}

function close () {
  if (app) {
    app.close();
  }
}

module.exports = {
  app,
  setPort,
  listen,
  close
};
