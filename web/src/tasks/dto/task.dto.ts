export class TaskDto{
    readonly name: string;
    readonly urgency: boolean;
    readonly importance: boolean;
    readonly deadline: string;
    readonly fromProject: number;
}