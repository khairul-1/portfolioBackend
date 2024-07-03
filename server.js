require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const experienceRoutes = require("./routes/experience");
const projectRoutes = require("./routes/project");
const blogRoutes = require("./routes/blog");
const skillRoutes = require("./routes/skill");
const { checkAuth } = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 5000;
const database = process.env.DATABASE_URI;

mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/experiences", checkAuth, experienceRoutes);
app.use("/api/projects", checkAuth, projectRoutes);
app.use("/api/blogs", checkAuth, blogRoutes);
app.use("/api/skills", checkAuth, skillRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
