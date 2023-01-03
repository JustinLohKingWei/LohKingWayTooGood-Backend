import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HobbySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const HobbyModel = mongoose.model("Hobby", HobbySchema);

export default HobbyModel;
