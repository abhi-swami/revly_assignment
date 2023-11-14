const express = require("express");
const {
  registerStudent,
  loginStudent
} = require("../Controllers/Student.controller");
const StudentRouter = express.Router();

// Register a new Student
StudentRouter.post("/register", registerStudent);

// Login a Student
StudentRouter.post("/login", loginStudent);

module.exports = StudentRouter;
