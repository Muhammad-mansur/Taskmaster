import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/taskMasterDB")
.then(() => console.log("Mongodb connected"))
.catch(err => console.error("Mongodb connection err:", err));

app.get("/", (req, res) => {
    res.send("Hello, express server is running")
});

app.use("/tasks", taskRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});