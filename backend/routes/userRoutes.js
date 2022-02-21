import express from "express";
import userController from "../controllers/userController.js";
import userValidate from "../middleware/userValidate.js";
import roleValidate from "../middleware/roleValidate.js";
import user from "../models/user.js";

const router = express.Router();

//http:localhost:3001/api/role/registerRole

router.post(
  "/registerUser",
  userValidate.existingUser,
  roleValidate.existingRole,
  userController.registerUser
);

router.get("/listUser/:name?", userController.listUser);
router.post("/login", userController.login)

export default router;