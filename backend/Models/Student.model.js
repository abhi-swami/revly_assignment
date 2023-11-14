// models/patient.js

const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"]
  },
  medium: {
    type: String,
    enum: ["Hindi", "English"]
  }
});

const StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel;
