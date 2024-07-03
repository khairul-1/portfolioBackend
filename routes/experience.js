// experience.js
const express = require("express");
const {
  createExperience,
  getExperiences,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");
const router = express.Router();

router.post("/", createExperience);
router.get("/", getExperiences);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

module.exports = router;
