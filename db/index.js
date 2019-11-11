import { makeDb } from "../src/dataAccess";
import { experimentsCollectionName } from "../src/dataAccess/experimentsDb";
import dotenv from "dotenv";

dotenv.config();
(async function setupDb () {
  console.log("Setting up database...");
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  const db = await makeDb();
  const result = await db
    .collection(experimentsCollectionName)
    .createIndexes([
      { key: { _id: 1 }, name: "id_idx" },
      { key: { userId: 1 }, name: "userId_idx" },
      { key: { posedNoun: 1 }, name: "posedNoun_idx" }
    ]);

  console.log(result);
  console.log("Database setup complete...");
  process.exit();
})();
