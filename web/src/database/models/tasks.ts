import Sequelize, { Model } from 'sequelize';
import seq from '../connection';
import { Projects } from './projects';

interface TaskInfo{
    id?: number,
    name: string,
    importance: boolean,
    urgency: boolean,
    deadline: string,
    fromProject: number
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
    importance: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    urgency: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    deadline: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fromProject: {
        type: Sequelize.INTEGER,
        references: {
            model: Projects,
            key: 'id'
        }
    }
});

export {
    TaskInfo,
    Tasks
};