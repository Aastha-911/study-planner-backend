const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate, group } = req.body;
        const task = new Task({ title, description, dueDate, group, createdBy: req.user.id });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ group: req.params.groupId });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Add updateTask and deleteTask functions as needed
