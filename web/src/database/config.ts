import { Users } from './models/users';
import { Tasks } from './models/tasks';

function configDB(){
    Users;

    Users.hasMany(Tasks, {
        foreignKey: 'owner',
        sourceKey: 'id'
    });

    Tasks.belongsTo(Users, {
        foreignKey: 'owner',
        targetKey: 'id'
    });
}

export default configDB;