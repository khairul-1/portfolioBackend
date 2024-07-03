// Experience.js
const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  position: String,
  company: String,
  duration: String,
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Experience", experienceSchema);
