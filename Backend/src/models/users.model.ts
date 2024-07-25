import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  // documents: [
  //   {
  //     permissions: {
  //       enum: ["read", "write"],
  //     },
  //   },
  // ],

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("user", schema);
