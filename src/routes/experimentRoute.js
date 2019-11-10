import { createGuess } from "../controllers/guessController";

let express = require("express");
let router = express.Router();

router.post("/",
  async (req, res) => {
    try {
      const guess = await createGuess(req);
      res.status(201).json(guess);
    } catch (err) {
      res.status(400).json(err);
    }
  }
);

module.exports = router;
