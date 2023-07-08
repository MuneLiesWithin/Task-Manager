const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')
const Task = require('../models/Task')

router.get('/', TaskController.showTask)
router.get('/create', TaskController.createTask)
router.post('/create', TaskController.createTaskAdd)
router.post('/remove', TaskController.removeTask)
router.get('/tasks/edit/:id', TaskController.editTask)
router.post('/tasks/edit', TaskController.updateTask)
router.post('/updatestatus', TaskController.toggleTaskStatus)


module.exports = router