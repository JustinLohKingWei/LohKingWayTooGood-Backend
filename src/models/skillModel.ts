import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
});

const SkillSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  projectLinks: { type: [ProjectSchema], required: false },
});

const SkillModel = mongoose.model("", SkillSchema);

export default SkillModel;
