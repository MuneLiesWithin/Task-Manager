const Task = require('../models/Task')

class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }
    static async createTaskAdd(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }
        await Task.create(task)
        res.redirect('/')
    }
    static async showTask(req, res) {
        const tasks = await Task.findAll({raw: true}) 
        res.render('tasks/all', {tasks})
    }
    static async removeTask(req, res) {
        const id = req.body.id
        await Task.destroy({where: {id: id}})
        res.redirect('/')
    }
    static async editTask(req, res) {
        const id = req.params.id
        const task = await Task.findOne({raw: true, where: {id: id}})
        res.render('tasks/edit', {task})
    }
    static async updateTask(req, res) {
        const id = req.body.id
        const title = req.body.title
        const description = req.body.description
        const task = {
            title,
            description,
        }

        await Task.update(task, {where: {id: id}})
        res.redirect('/')
    }
    static async toggleTaskStatus(req, res){
        const id = req.body.id

        const task = {
            done: req.body.done === "0" ? true : false
        }
        await Task.update(task, {where: {id: id}})
        res.redirect('/')
    }
}

module.exports = TaskController