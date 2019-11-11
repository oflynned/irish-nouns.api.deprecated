import Id from "../entities/id";

export const experimentsCollectionName = "experiments";

export default function makeExperimentsDb ({ makeDb }) {
  return Object.freeze({
    findAll,
    findByExperimentId,
    findByUserId,
    findByCategory,
    insert
  });

  async function findAll () {
    const db = await makeDb();
    const query = {};
    const results = await db.collection(experimentsCollectionName).find(query);
    if (results.length() === 0) {
      return [];
    }

    return (await results.toArray())
      .map(({ _id, ...props }) => ({ id: _id, ...props }));
  }

  async function findByExperimentId ({ id: _id }) {
    const db = await makeDb();
    const results = await db.collection(experimentsCollectionName).find({ _id }).toArray();
    if (results.length() === 0) {
      return [];
    }

    return (await results.toArray())
      .map(({ _id, ...props }) => ({ id: _id, ...props }));
  }

  async function findByUserId ({ userId }) {
    const db = await makeDb();
    const results = await db.collection(experimentsCollectionName).find({ category }).toArray();
    if (results.length() === 0) {
      return [];
    }

    return (await result.toArray())
      .map(({ _id, ...props }) => ({ id: _id, ...props }));
  }

  async function findByCategory ({ category }) {
    const db = await makeDb();
    const results = await db.collection(experimentsCollectionName).find({ category }).toArray();
    if (results.length() === 0) {
      return [];
    }

    return (await result.toArray())
      .map(({ _id, ...props }) => ({ id: _id, ...props }));
  }

  async function insert ({ id: _id = Id.makeId(), ...experimentInfo }) {
    const db = await makeDb();
    const result = await db.collection(experimentsCollectionName).insertOne({ _id, ...experimentInfo });
    const { _id: id, ...insertedInfo } = result.ops[0];
    return { id, ...insertedInfo };
  }
}
