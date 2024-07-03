const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const project = new Project({ ...req.body, userId: req.userData.userId });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    //console.log(projects);
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, userId: req.userData.userId },
      req.body,
      { new: true }
    );
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findOneAndDelete({
      _id: req.params.id,
      userId: req.userData.userId,
    });
    res.status(200).json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
