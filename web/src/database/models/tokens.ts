import Sequelize, { Model } from 'sequelize';
import seq from '../connection';

interface TokenInfo {
    token: string
}

interface TokenInstance extends Model<TokenInfo>, TokenInfo{}

const Tokens = seq.define<TokenInstance>('tokens', {
    token: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export {
    TokenInfo,
    Tokens
};