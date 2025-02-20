const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  goalSchema = new Schema({
    text: String,
  });

const GoalModel = mongoose.model("Goal", goalSchema);

module.exports = GoalModel;
