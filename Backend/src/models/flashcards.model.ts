import mongoose, {Schema} from "mongoose";


const flashcardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

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

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  flashcards: [{
    type: Schema.Types.ObjectId,
    ref: "Flashcard"
  }]
})

const FlashcardsModel =  mongoose.model("Flashcard", flashcardSchema);
const FlashcardsGroupModel =  mongoose.model("FlashcardGroup", groupSchema);

export {
 FlashcardsModel,
  FlashcardsGroupModel
};
