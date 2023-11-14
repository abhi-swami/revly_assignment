const express = require("express");
const { register, login } = require("../Controllers/Teacher.controller");
const TeacherRouter = express.Router();

// Teacher Registration
TeacherRouter.post("/register", register);

// Teacher Login
TeacherRouter.post("/login", login);

module.exports = TeacherRouter;
