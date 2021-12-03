import Sequelize, { Model } from 'sequelize';
import seq from '../connection';

interface UserInfo{
    id?: number,
    email: string,
    password: string,
    name: string
}

interface UserInstance extends Model<UserInfo>, UserInfo{}

const Users = seq.define<UserInstance>('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export {
    Users
};