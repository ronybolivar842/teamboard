import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
  name: String,
  description: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
  modifyDate: { type: Date, default: Date.now },
});

const role = mongoose.model("roles", rolesSchema); 

export default role;