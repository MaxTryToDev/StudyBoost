import mongoose from "mongoose";

const schema = new mongoose.Schema({
  question: {
    type: String,
  },

  answer: {
    type: String,
  },

  group: {
    type: [String],
  },

  acquired: {
    type: Boolean,
    default: false,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default new mongoose.Model("flashcards", schema);
