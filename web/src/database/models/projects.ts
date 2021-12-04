import Sequelize, { Model } from 'sequelize';
import seq from '../connection';
import { Accounts } from './accounts';

interface ProjectInfo{
    id?: number,
    name: string
    owner: number,
    active: boolean
}

interface ProjectsInstance extends Model<ProjectInfo>, ProjectInfo{}

const Projects = seq.define<ProjectsInstance>('projects', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    owner: {
        type: Sequelize.INTEGER,
        references: {
            model: Accounts,
            key: 'id' 
        }
    },
    active:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export {
    Projects
};