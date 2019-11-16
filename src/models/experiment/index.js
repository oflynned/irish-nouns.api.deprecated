import { Document } from "marpat";

import Schema from "./schema";

class Experiment extends Document {
  constructor () {
    super();
    this.schema(Schema);
  }

  preSave () {
    super.preSave();
    this.createdAt = Date.now();
  }
}

export default Experiment;
