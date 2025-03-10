import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  whatsapp: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: String, required: true },
  language: { type: String, required: true },
  subject: { type: String, required: true },  // Ensure this is present
  address: { type: String, required: true },
  gender: { type: String, required: true }
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
export default Teacher;
