interface Task {
    name: string,
    priority: number,
    approximate_duration: number,
    deadline: string,
    owner: number
}

interface UpdateTask {
    readonly name?: string,
    readonly priority?: number,
    readonly approximate_duration?: number,
    readonly deadline?: string
}

export {
    Task,
    UpdateTask
};