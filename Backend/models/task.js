import { text } from "express";
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },

    priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        default: "Low",
    },

    completed: {
        type: Boolean,
        default: false,
    },

    CreatedAt: {
        type: Date,
        default: Date.now,
    }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;