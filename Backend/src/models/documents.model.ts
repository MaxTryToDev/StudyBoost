import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },

  path: {
    type: String,
    require: true,
  },

  type: {
    type: String, // PDF
  },

  usersId: [
    {
      type: [String],
    },
  ],

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default  mongoose.model("Document", schema);
