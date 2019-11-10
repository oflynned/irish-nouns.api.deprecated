import helmet from "helmet";
import createError from "http-errors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import fileUpload from "express-fileupload";

import environmentConfig from "./config/environmentConfig";

const logger = require("./config/loggerConfig");
const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : "combined";

let app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(fileUpload());

const experimentRoute = require("./routes/guessRoute");

app.use("/api/experiments", experimentRoute);

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

    logger.error(err.message, {url: req.originalUrl});

    res.status(500);
    res.json({error: err.message});
});

function setPort(port) {
    if (!port) {
        throw new Error("no port configured!");
    }

    app.set("port", parseInt(port, 10));
}

function listen() {
    const port = app.get("port") || environmentConfig.port;
    app = app.listen(port, () => {
        console.log(`The server is running and listening at http://localhost:${port}`);
    });
}

function close() {
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
