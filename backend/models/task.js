import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: "users"},
    name: String,
    description : String,
    imageUrl: String,
    taskStatus : String,
    registerDate : {type: Date, default: Date.now},
    modifyDate: { type: Date, default: Date.now },
});

const task = mongoose.model("tasks", taskSchema); 

export default task;
