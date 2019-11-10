const schema = {
  createdAt: {
    type: Number,
    default: Date.now()
  },
  updatedAt: {
    type: Number,
    default: null
  },
  category: {
    type: String,
    required: true
  },
  posedNoun: {
    type: String,
    required: true
  },
  answerAttempt: {
    type: String,
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  }
};

export default schema;
