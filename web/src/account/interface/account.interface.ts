interface Account{
    readonly id: number,
    readonly name: string,
    readonly email: string
}

interface UpdateAccount {
    readonly name?: string,
    readonly email?: string,
    readonly password?: string
}

export {
    Account,
    UpdateAccount
};
