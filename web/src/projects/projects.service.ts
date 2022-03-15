import { Injectable } from "@nestjs/common";
import { ProjectsRepo } from "../database/repository/projects.repository";
import { Project } from "src/projects/interfaces/project.interface";
import tryWrapper from "../utils/wrapper";

@Injectable()
export class ProjectsService{
    constructor(private readonly projectsRepo: ProjectsRepo){}

    async createProject(req, project: Project): Promise<boolean> {
        const newProject: Project = project;
        project.owner = req.body.user.id;
        project.active = false;

        return await tryWrapper(this.projectsRepo.create, newProject);
    }

    async getProject(id: number) : Promise<any> {
        return await this.projectsRepo.find(id);
    }

    async getAllProjects(req) : Promise<any> {
        const res = await this.projectsRepo.findAll(req.body.user.id)

        return (res ? res : 'no projects found');
    }

    async changeActiveProject(id: number): Promise<boolean> {
        return await tryWrapper(this.projectsRepo.updateProject, id);
    }

    async deleteProject(id: number): Promise<boolean> {
        return await tryWrapper(this.projectsRepo.delete, id)
    }
}