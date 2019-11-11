require("dotenv").load();

process.env.NODE_ENV = "test";
process.env.ENVIRONMENT = "test";

const { default: databaseConfig } = require("../src/config/databaseConfig");
const { isTestEnvironment } = require("../src/config/environmentConfig");

global.beforeAll(async () => {
  if (!isTestEnvironment()) {
    console.error(`Throwing error because environment is not 'test' (it's actually ${process.env.ENVIRONMENT})`);
    console.error("Otherwise your connected db would purge *REAL* data!");
    throw new Error("Not a test environment!");
  }

  // TODO should instantiate some setup for an in-memory database

  console.log(`Using ENVIRONMENT=${process.env.ENVIRONMENT}, db is connected on ${databaseConfig.databaseUri}`);
  console.log("Tests are good to go!");
});

global.afterAll(async () => {

});
