const ProjectsRepo = require('../../web/src/database/repository/');
const TasksRepo = require('../../web/src/database/repository/tasks.repository');

const getAllTasks = async (req, res) => {
    res.send(await ProjectsRepo.findAll(req.body.id));
};

const deleteTask = async (req, res) => {
    await TasksRepo.delete(req.body.id);
    res.send();
};

module.exports = {
    getAllTasks,
    deleteTask
};