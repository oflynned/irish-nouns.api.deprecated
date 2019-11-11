import databaseConfig from "../config/databaseConfig";
import makeExperimentsDb from "./experimentsDb";
import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
const url = databaseConfig.databaseUri;
const dbName = databaseConfig.name;
const client = new MongoClient(url, { useNewUrlParser: true });

export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}

const experimentsDb = makeExperimentsDb({ makeDb });
export default experimentsDb;
