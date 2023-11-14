const { request } = require("express");
const TeacherModel = require("../Models/Teacher.model");
const getRandomTeacherImage = require("../Utils/StaticData");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// Controller function for Teacher registration
const register = async (req, res) => {
  try {
    // Check if the email already exists in the database
    const existingTeacher = await TeacherModel.findOne({
      email: req.body.email
    });

    if (existingTeacher) {
      return res
        .status(400)
        .json({ message: "Email already exists!", status: false });
    }

    // If the email is not found, proceed with registration logic

    // Hash the password before saving it
    const saltRounds = 10; // Number of salt rounds (adjust as needed)
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Proceed with registration logic
    const newTeacher = await new TeacherModel({
      ...req.body,
      password: hashedPassword,
      profile: getRandomTeacherImage()
    });
    // console.log(newTeacher)
    // Save the new Teacher to the database
    newTeacher.save();

    // Send a success response with the saved Teacher data
    res
      .status(201)
      .json({ newTeacher, message: "registration successfully", status: true });
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Controller function for Teacher login
const login = async (req, res) => {
  try {
    // Find the Teacher by email
    const teacher = await TeacherModel.findOne({ email: req.body.email });

    // Check if the Teacher exists
    if (!teacher) {
      return res
        .status(400)
        .json({ message: "Email not found!", status: false });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      teacher.password
    );

    // Check if the password is correct
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect password!", status: false });
    }
    var token = jwt.sign({ userId: teacher._id }, `${process.env.secretKey}`);

    // If email and password are correct, send a success response
    res
      .status(200)
      .json({
        message: "Login successfull!",
        token,
        userId: teacher._id,
        status: true
      });
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login
};
