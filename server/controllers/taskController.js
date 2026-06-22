const Task = require("../models/Task");

// Get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Create a task
const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
  });

  res.status(201).json(task);
};

// Update a task
const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(task);
};

// Delete a task
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.json({
    message: "Task deleted successfully",
  });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};