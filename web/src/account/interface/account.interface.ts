interface Account{
    readonly id: number,
    readonly username: string,
    readonly email: string,
    readonly desc?: string
}

interface UpdateAccount {
    readonly username?: string,
    readonly email?: string,
    readonly password?: string,
    readonly desc?: string
}

interface AccountInList{
    readonly id: number,
    readonly username: string
}

export {
    Account,
    UpdateAccount,
    AccountInList
};
