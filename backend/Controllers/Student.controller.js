const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const StudentModel = require("../Models/Student.model");

// Controller function for Student registration
const registerStudent = async (req, res) => {
  try {
    // Check if the email already exists in the database
    const existingStudent = await StudentModel.findOne({
      email: req.body.email
    });

    if (existingStudent) {
      return res
        .status(400)
        .json({ message: "Email already exists!", status: false });
    }

    // Hash the password before saving it
    const saltRounds = 10; // Number of salt rounds (adjust as needed)
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Proceed with registration logic
    const newStudent = await new StudentModel({
      ...req.body,
      password: hashedPassword
    });

    // Save the new Student to the database
    newStudent.save();

    // Send a success response with the saved Student data
    res
      .status(201)
      .json({ newStudent, message: "Registration successfully", status: true });
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function for Student login
const loginStudent = async (req, res) => {
  try {
    // Find the Student by email
    const student = await StudentModel.findOne({ email: req.body.email });

    // Check if the Student exists
    if (!student) {
      return res
        .status(400)
        .json({ message: "Email not found!", status: false });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      student.password
    );

    // Check if the password is correct
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect password!", status: false });
    }
    var token = jwt.sign({ userId: student._id }, `${process.env.secretKey}`);
    // userId: student._id
    console.log("userId1: ", student._id);
    // If email and password are correct, send a success response
    res
      .status(200)
      .json({
        message: "Login successful!",
        status: true,
        token,
        userId: student._id
      });
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerStudent,
  loginStudent
};
