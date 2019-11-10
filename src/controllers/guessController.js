import GenderGuess from "../models/genderGuess";

export const createGuess = async ({ body }) => GenderGuess.create(body).save();
