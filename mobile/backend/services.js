const ProjectsRepo = require('../../web/src/database/repository/');
const TasksRepo = require('../../web/src/database/repository/tasks.repository');

const getAllTasks = async (req, res) => {
    res.send(await ProjectsRepo.findAll(req.body.id));
};

const deleteTask = async (id) => {
    await TasksRepo.delete(id);
    res.send();
};

module.exports = {
    getAllTasks,
    deleteTask
};