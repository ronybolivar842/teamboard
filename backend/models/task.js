import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: "users"},
    name: String,
    password: String,
    description : String,
    imageUrl: String,
    taskStatus : "to-do",
    registerDate : {type: Date, default: Date.now},
});

const task = mongoose.model("tasks", taskSchema); //esquema se garda en coleccion de mongodb

export default task;