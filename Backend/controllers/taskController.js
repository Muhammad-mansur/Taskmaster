import Task from "../models/task.js";

// Create a task
export const createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const saved = await newTask.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get all tasks
export const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
}

// Toggle completion
export const toggleTasks = async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(updated);
    } catch (error) {   
        res.status(400).json({ error: "Task not found" });
    }
}

// Delete task
export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
    } catch (err) {
        res.json({ message: "Task deleted"});
    }
}