const express = require("express");
const connection = require("./Config/server");
require("dotenv").config();
const app = express();
const cors = require("cors");
const TeacherRouter = require("./Routes/Teacher.route");
const StudentRouter = require("./Routes/Student.route");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("DoubtShare Backend");
});
app.use("/teacher", TeacherRouter);
app.use("/student", StudentRouter);
app.listen(process.env.PORT || 3001, async () => {
  try {
    await connection;
    console.log("connected to database");
  } catch (error) {
    console.log("unable to connect to database");
  }
  console.log("server is running on port 8080");
});
