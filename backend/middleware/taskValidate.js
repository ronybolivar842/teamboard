import task from "../models/task.js";
import user from "../models/user.js";

const existingTask = async (req, res, next) => {
  const taskId = await task.findOne({ name: req.body.name });
  if (taskId)
    return res.status(500).send({ message: "The task is already registered" });

  next();
};

const existingUserTask = async (req, res, next) => {
  const userId = await user.findOne({ _id: req.body.user });
  if (!userId) return res.status(500).send({ message: "User not found" });

  req.body.user = userId._id;

  if (userId.dbStatus == false)
      return res.status(500).send({ message: "User not found" });

  next();
};

const validateStatusTask = async (req, res, next) => {

let status = ["to-do","in-progress", "finish"];
  if (!(status.indexOf(req.body.taskStatus) > -1))
    return res.status(500).send({ message: "taskStatus not valid" });

  next();
};

export default { existingTask, existingUserTask, validateStatusTask};