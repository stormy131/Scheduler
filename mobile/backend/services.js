const ProjectsRepo = require('../../web/dist/database/repository/projects.repository');
const TasksRepo = require('../../web/dist/database/repository/tasks.repository');

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