import { Accounts } from './models/accounts';
import { Tasks } from './models/tasks';
import { RefTokens } from './models/tokens';

function configDB(){
    Accounts;
    RefTokens;

    Accounts.hasMany(Tasks, {
        foreignKey: 'owner',
        sourceKey: 'id'
    });

    Tasks.belongsTo(Accounts, {
        foreignKey: 'owner',
        targetKey: 'id'
    });
}

export default configDB;