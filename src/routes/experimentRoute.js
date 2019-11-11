import { createExperiment } from "../controllers/experimentController";

let express = require("express");
let router = express.Router();

router.post("/",
  async (req, res) => {
    try {
      const guess = await createExperiment(req);
      res.status(201).json(guess);
    } catch (err) {
      res.status(400).json(err);
    }
  }
);

module.exports = router;
