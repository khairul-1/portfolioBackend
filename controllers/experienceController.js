// experienceController.js
const Experience = require("../models/Experience");

exports.createExperience = async (req, res) => {
  try {
    const experience = new Experience({
      ...req.body,
      userId: req.userData.userId,
    });
    await experience.save();
    res.status(201).json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({ userId: req.userData.userId });
    res.status(200).json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.params.id, userId: req.userData.userId },
      req.body,
      { new: true }
    );
    res.status(200).json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    await Experience.findOneAndDelete({
      _id: req.params.id,
      userId: req.userData.userId,
    });
    res.status(200).json({ message: "Experience deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
