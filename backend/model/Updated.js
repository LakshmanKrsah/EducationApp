import mongoose from "mongoose";

const updateSchema = new mongoose.Schema({
  title: String,
  mcqTitle: String,
  mcqDescription: String,
  mcqLink: String,
  skillsTitle: String,
  skillsDescription: String,
  skillsLink: String,
  examTipsTitle: String,
  examTipsDescription: String,
  examTipsLink: String,
});

export default mongoose.model("Update", updateSchema);
