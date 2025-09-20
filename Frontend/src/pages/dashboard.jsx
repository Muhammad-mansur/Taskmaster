import React, { useState } from "react";

export default function Dashboard(){
    
    // State to store list of tasks
    const [tasks, setTasks] = useState([
    // { id: 1, text: "Set up project repository", priority: "High", completed: true, createdAt: "2 hours ago" },
    // { id: 2, text: "Design database schema", priority: "Medium", completed: false, createdAt: "1 day ago" },
    // { id: 3, text: "Implement user authentication", priority: "High", completed: false, createdAt: "3 days ago" },
  ]);

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("High");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Helper: format "time ago"
  function timeAgo(timestamp) {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);

    if (seconds < 60) return `${seconds} sec ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }


  const addTask = () => {
    if (!newTask.trim()) return; // prevent empty tasks
    const newTaskObj = {
        id: Date.now(),
        text: newTask, priority,
        completed: false,
        createdAt: Date.now()
    }
    setTasks([newTaskObj, ...tasks]);
    setNewTask(""); // reset input
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending" && task.completed) return false;
    if (filter === "Completed" && !task.completed) return false;
    if (filter === "High Priority" && task.priority !== "High") return false;
    if (search && !task.text.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  const toggleComplete = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500">
      <div className="bg-white w-[600px] rounded-2xl shadow-lg p-6">
        <div>
          <h1 className="text-2xl font-bold text-indigo-700 mb-2">My Tasks</h1>
          <p className="text-gray-500 mb-4"> {tasks.length} tasks • {completedCount} completed </p>
        </div>

        {/* Input Section */}
         <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add Task
          </button>
        </div>

        {/* Priority Buttons */}
        <div className="flex gap-2 mb-4">
          {["High", "Medium", "Low"].map((p) => (
            <button
              key={p}
              onClick={() => setPriority(p)}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${
                priority === p
                  ? "bg-purple-100 border-indigo-500"
                  : "bg-gray-100 border-gray-300"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 mb-4">
          {["All", "Pending", "Completed", "High Priority"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                filter === f
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {f}
            </button>
          ))}
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="h-5 w-5 text-purple-600 rounded"
                />
                <span
                  className={`${
                    task.completed ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                <span className="font-medium">{task.priority} priority</span> •{" "}
                {timeAgo(task.createdAt)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}