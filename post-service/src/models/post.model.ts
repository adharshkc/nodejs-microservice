import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdBy: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
});

const product = mongoose.model("Post", postSchema);

export default product;
