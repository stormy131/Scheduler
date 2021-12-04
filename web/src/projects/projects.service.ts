import { Injectable } from "@nestjs/common";
import { ProjectsRepo } from "../database/repository/projects.repository";
import { Project } from "src/projects/interfaces/project.interface";

@Injectable()
export class ProjectsService{
    constructor(private readonly projectsRepo: ProjectsRepo){}

    async createProject(req, project: Project) {
        const newProject: Project = project;
        project.owner = req.body.user.id;

        return await this.projectsRepo.create(newProject);
    }

    async getProject(id: number) : Promise<any> {
        const res = await this.projectsRepo.find(id);

        if (!res) {
            return 'project not found';
        }

        return res;
    }

    async getAllProjects(req) : Promise<any> {
        const res = await this.projectsRepo.findAll(req.body.user.id)

        if (!res) {
            return 'no projects found';
        }

        return res;
    }

    async changeActiveProject(id: number) {
        const oldActive = await this.projectsRepo.findActive();

        if (oldActive) {
            oldActive.active = false;
        }

        const newActive = await this.projectsRepo.find(id);
        newActive.active = true;
    }

    async deleteTask(id: number) {
        return await this.projectsRepo.delete(id);
    }
}