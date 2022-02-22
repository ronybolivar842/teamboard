import task from "../models/task.js";

const registerTask = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.imageUrl ||
    !req.body.user
  )
    return res.status(400).send({ message: "Incomplete data" });

  let schema = new task({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    taskStatus: "to-do",
    user: req.body.user,
  });

  let result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register task" });

  res.status(200).send({ result });
};

const listTask = async (req, res) => {
  let tasks = await task.find();
  if (tasks.length === 0)
    return res.status(400).send({ message: "No search results" });

  return res.status(200).send({ tasks });
};

const deleteTask = async (req, res) => {
  if (!req.params["_id"])
    return res.status(400).send({ message: "Incomplete data" });

  const tasks = await task.findByIdAndDelete(req.params["_id"]);

  return !tasks
    ? res.status(400).send({ message: "Error deleting task" })
    : res.status(200).send({ message: "Task deleted" });
};

const updateTask = async (req, res) => {
  if (!req.body._id || !req.body.taskStatus)
    return res.status(400).send({ message: "Incomplete data" });

  const editTask = await task.findByIdAndUpdate(req.body._id, {
    taskStatus: req.body.taskStatus,
    modifyDate: new Date(),
  });

  return !editTask
    ? res.status(500).send({ message: "Error editing Task" })
    : res.status(200).send({ message: "Task updated" });
};

export default { registerTask, listTask, deleteTask, updateTask };