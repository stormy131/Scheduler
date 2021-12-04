interface Task {
    name: string,
    urgency: boolean,
    importance: boolean,
    deadline: string,
    fromProject: number
}

interface UpdateTask {
    readonly name?: string,
    readonly urgency?: boolean,
    readonly importance?: boolean,
    readonly deadline?: string,
    readonly fromProject?: number
}

export {
    Task,
    UpdateTask
};