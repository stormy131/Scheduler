import { Injectable } from "@nestjs/common";
import { Task, UpdateTask } from "src/tasks/interfaces/task.interface";
import { TaskInfo, Tasks } from "../models/tasks";

@Injectable()
export class TasksRepo{
    async create(task: Task) {
        await Tasks.create(task);
    }

    async update(id: number, newValues: UpdateTask) {
		await Tasks.update(newValues, {where: {id}});
    }

    async delete(id: number) {
        await Tasks.destroy({where: {id}});
    }

    async find(id: number) : Promise<Task> {
        return await Tasks.findOne({where: {id}}); 
    }

    async findAll(userId: number): Promise<TaskInfo[]>{
        return await Tasks.findAll({where: {owner: userId}});
    }
}