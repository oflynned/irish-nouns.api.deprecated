import { isProductionEnvironment } from "./environmentConfig";

const { MONGO_URL } = process.env;

export const environments = ["production", "development", "test"];

export function getEnvironment () {
  const reportedEnvironment = process.env.ENVIRONMENT ? process.env.ENVIRONMENT.toLowerCase() : "development";
  return environments.includes(reportedEnvironment) ? reportedEnvironment : "development";
}

export const dbName = () => (isProductionEnvironment() ? "irish_nouns" : `irish_nouns_${getEnvironment()}`);

export const mongodbUri = () => (isProductionEnvironment() ? MONGO_URL : `mongodb://localhost:27017/${dbName()}`);

const databaseConfig = {
  name: dbName(),
  databaseUri: mongodbUri(),
  environment: getEnvironment()
};

export default databaseConfig;
