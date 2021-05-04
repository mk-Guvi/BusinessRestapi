const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    default: Date.now() //this make current time as the value
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true
  }
});
const Post = model("Post", PostSchema);

module.exports = Post;
