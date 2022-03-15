import { Injectable } from "@nestjs/common";
import { Project } from "src/projects/interfaces/project.interface";
import { ProjectInfo, Projects } from "../models/projects";
import { Tasks } from '../models/tasks';

@Injectable()
export class ProjectsRepo{
    async create(project: Project) {
        await Projects.create(project as ProjectInfo);
    }

    async delete(id: number) {
        await Projects.destroy({where: {id}});
    }

    async find(id: number) : Promise<ProjectInfo> {
        return await Projects.findOne({
            where: {id},
            include: [Tasks]
        });
    }

    async findAll(owner: number): Promise<ProjectInfo[]> {
        return await Projects.findAll({where: {owner}});
    }

    async findActive() : Promise<ProjectInfo> {
        return await Projects.findOne({where: {active: true}});
    }

    async updateProject(id: number) {
        const old = await Projects.findOne({where: {active: true}}) as any;
        if(old !== null){
            await Projects.update({active: false}, {where: {id: old.id}});
        }
        await Projects.update({active: true}, {where: {id}});
    }

    async checkId(id: number): Promise<ProjectInfo>{
        return await Projects.findOne({where: {id}});
    }
}