import { Document } from "marpat";

import Schema from "./schema";

class Experiment extends Document {
  constructor () {
    super();
    this.schema(Schema);
  }
}

export default Experiment;
