const express = require("express");
const {
  createSkill,
  getSkills,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");
const router = express.Router();

router.post("/", createSkill);
router.get("/", getSkills);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

module.exports = router;
