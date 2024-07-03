const Skill = require("../models/Skill");

exports.createSkill = async (req, res) => {
  try {
    const skill = new Skill({ ...req.body, userId: req.userData.userId });
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ userId: req.userData.userId });
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findOneAndUpdate(
      { _id: req.params.id, userId: req.userData.userId },
      req.body,
      { new: true }
    );
    res.status(200).json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    await Skill.findOneAndDelete({
      _id: req.params.id,
      userId: req.userData.userId,
    });
    res.status(200).json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
