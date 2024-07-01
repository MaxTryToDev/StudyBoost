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

  documents: [
    {
      id: {
        type: String,
        require: true,
        unique: true,
      },

      permissions: {
        enum: ["read", "write"],
        require: true,
      },
    },
  ],

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default new mongoose.Model("documents", schema);
