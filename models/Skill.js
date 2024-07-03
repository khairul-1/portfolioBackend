// Skill.js
const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Skill", skillSchema);
