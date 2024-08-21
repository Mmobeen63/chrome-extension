import mongoose from "mongoose";

const selectedTextSchema = new mongoose.Schema({
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});
 const SelectedTextModel = mongoose.model("SelectedText", selectedTextSchema);
export default SelectedTextModel;