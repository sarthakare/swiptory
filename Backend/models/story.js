const mongoose = require("mongoose");
const { Schema } = mongoose;

const userStory = new Schema({
  heading: String,
  description: String,
  image: String,
  category: String
});

const UserStory = mongoose.model("story", userStory);

module.exports = UserStory;
