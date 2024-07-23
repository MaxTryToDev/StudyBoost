import mongoose, {Schema} from "mongoose";
import slugify from "slugify";

const schema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },

  slug: String,

  documents : [
    {
      type: Schema.Types.ObjectId,
      ref: "Document"
    }
  ],

  folders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Folder"
    }
  ],

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

schema.pre('save', function(next) {
  this.slug = slugify(this.title as string, {lower: true});
  next();
});

export default mongoose.model("Folder", schema);
