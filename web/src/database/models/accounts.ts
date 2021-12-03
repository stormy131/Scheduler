import Sequelize, { Model } from 'sequelize';
import seq from '../connection';

interface AccountInfo{
    id?: number,
    email: string,
    password: string,
    name: string
}

interface AccountInstance extends Model<AccountInfo>, AccountInfo{}

const Accounts = seq.define<AccountInstance>('users', {
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
    Accounts
};
