let mongoose = require("mongoose");
let schema = mongoose.Schema;
const articleSchema = new schema({
  title: { type: String },
  article: { type: String },
  author: { type: String }
});
const articles = mongoose.model("Articles", articleSchema);
module.exports = articles;
