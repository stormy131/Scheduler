const Router = require('express').Router();
const {
    getAllTasks,
    deleteTask
} = require('./services.js');

Router.route('/')
    .get(getAllTasks)
    .delete(deleteTask);

module.exports = Router;