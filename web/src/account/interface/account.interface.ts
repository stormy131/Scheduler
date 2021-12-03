interface Account{
    readonly id: number,
    readonly name: string,
    readonly email: string,
    readonly desc?: string
}

interface UpdateAccount {
    readonly name?: string,
    readonly email?: string,
    readonly password?: string,
    readonly desc?: string
}

export {
    Account,
    UpdateAccount
};
