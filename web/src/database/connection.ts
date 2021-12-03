require('dotenv').config();
import { Sequelize } from 'sequelize';

const seq = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    dialect: 'postgres',
    host: 'localhost'
});

export default seq;