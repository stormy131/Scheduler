const ProjectsRepo = require('../../web/src/database/repository/');
const TasksRepo = require('../../web/src/database/repository/tasks.repository');

const getAllTasks = async () => {
    return await ProjectsRepo.getTasks();
};

const deleteTask = async (id) => {
    await TasksRepo.delete(id);
};

module.exports = {
    getAllTasks,
    deleteTask
};