import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
});

const WorkModel = mongoose.model("Work", WorkSchema);

export default WorkModel;
