const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
  profile: {
    type: String,
    required: true
  },
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
  subjectExpert: {
    type: String,
    enum: ["male", "female", "other"]
  },
  language: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  }
});

const TeacherModel = mongoose.model("Teacher", TeacherSchema);

module.exports = TeacherModel;
