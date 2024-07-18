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
      require: true,
    },
  ],

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default new mongoose.Model("documents", schema);
