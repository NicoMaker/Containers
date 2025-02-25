const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  goalSchema = new Schema({
    text: String,
  }),
  GoalModel = mongoose.model("Goal", goalSchema);

module.exports = GoalModel;
