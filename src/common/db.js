import Marpat, { connect } from "marpat";
import databaseConfig from "../config/databaseConfig";
import { isDevelopmentEnvironment } from "../config/environmentConfig";

class Database {
  static async connect () {
    if (isDevelopmentEnvironment()) {
      const databaseProperties = Object.keys(databaseConfig).map(o => `${o} => ${databaseConfig[o]}`).join("\n");
      console.log(databaseProperties);
      console.log("\n");
    }

    return connect(databaseConfig.databaseUri, {});
  }

  static async client () {
    return Marpat.Client();
  }
}

export default Database;
