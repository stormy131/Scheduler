import { Injectable } from "@nestjs/common";
import { TasksRepo } from "../database/repository/tasks.repository";
import { Task, UpdateTask } from "./interfaces/task.interface";

@Injectable()
export class TasksService{
    constructor(private readonly tasksRepo: TasksRepo){}

    async createTask(task: Task) {
        return await this.tasksRepo.create(task);
    }

    async getTask(id: number) : Promise<any> {
        const res = await this.tasksRepo.find(id);

        if (!res) {
            return 'task not found';
        }

        return res;
    }

    async getAllTasks(req) : Promise<any> {
        const res = await this.tasksRepo.findAll(req.body.user.id)

        if (!res) {
            return 'no tasks found';
        }

        return res;
    }

    async updateTask(id: number, newValues: UpdateTask) {
        return await this.tasksRepo.update(id, newValues);
    }

    async deleteTask(id: number) {
        return await this.tasksRepo.delete(id);
    }
}