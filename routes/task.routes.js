const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/task.controller');
const router = express.Router();

router.post('/create', createTask);
router.get('/:groupId', getTasks);
// router.put('/:taskId', updateTask);
// router.delete('/:taskId', deleteTask);

module.exports = router;
