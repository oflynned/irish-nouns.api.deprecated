import { Document } from "marpat";

import Schema from "./schema";

class Guess extends Document {
    constructor () {
        super();
        this.schema(Schema);
    }
}

export default Guess;
