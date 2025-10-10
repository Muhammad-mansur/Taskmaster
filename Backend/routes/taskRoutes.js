import express from "express";
import { createTask } from "../controllers/taskController.js";
import { getTasks } from "../controllers/taskController.js";
import { toggleTasks } from "../controllers/taskController.js";
import { deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.post ("/", createTask);
router.get("/", getTasks);
router.put("/:id", toggleTasks);
router.delete("/", deleteTask);

export default router;