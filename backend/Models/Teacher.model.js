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
  },
  experience: {
    type: String,
    required: true
  }
});

const TeacherModel = mongoose.model("Teacher", TeacherSchema);

module.exports = TeacherModel;
