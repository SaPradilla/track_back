import { Router } from "express";
import { TaskDatasourceImpl } from "../../infrastructure/datasources/task.datasources.impl";
import { TaskRepositoryImpl } from "../../infrastructure/repositories/task.repository.impl";
import { TaskController } from "./controller";

export class TaskRoutes {

    static get routes(): Router{
        
        const router = Router();

        const datasource = new TaskDatasourceImpl()
        const repository = new TaskRepositoryImpl(datasource);
        const controller = new TaskController(repository);

        router.post('/create', controller.createTask)
        router.get('/list', controller.list)
        // router.get('/',AuthMiddleware.validateJWT ,controller.getUsers)

        return router;
    }
}