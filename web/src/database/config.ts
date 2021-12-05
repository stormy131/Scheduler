import { Accounts } from './models/accounts';
import { Tasks } from './models/tasks';
import { Tokens } from './models/tokens';
import { Projects } from './models/projects';

function configDB(){
    Accounts;
    Tokens;

    Accounts.hasMany(Projects, {
        foreignKey: 'owner',
        sourceKey: 'id'
    });

    Projects.belongsTo(Accounts, {
        foreignKey: 'owner',
        targetKey: 'id'
    });

    Projects.hasMany(Tasks, {
        foreignKey: 'fromProject',
        sourceKey: 'id'
    });

    Tasks.belongsTo(Projects, {
        foreignKey: 'fromProject',
        targetKey: 'id'
    });
}

export default configDB;