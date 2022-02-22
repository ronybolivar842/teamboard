import express from "express";
import taskController from "../controllers/taskController.js";
import taskValidate from "../middleware/taskValidate.js";
import userValidate from "../middleware/userValidate.js";

const router = express.Router();


router.post(
  "/registerTask",
  taskValidate.existingTask,
  taskValidate.existingUserTask,
  taskController.registerTask
);
router.get("/listTask", taskController.listTask);
router.delete("/delete/:_id", taskController.deleteTask);
router.put(
  "/updateTask",
  taskValidate.validateStatusTask,
  taskController.updateTask
);

export default router;