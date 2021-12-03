import Sequelize, { Model } from 'sequelize';
import seq from '../connection';
import { Users } from './users';

interface TaskInfo{
    id?: number,
    name: string,
    priority: number,
    approximate_duration: number,
    deadline: string,
    owner: number
}

interface TaskInstance extends Model<TaskInfo>, TaskInfo{}

const Tasks = seq.define<TaskInstance>('tasks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    approximate_duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    deadline: {
        type: Sequelize.STRING,
        allowNull: false
    },
    owner: {
        type: Sequelize.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    }
});

export {
    Tasks
};