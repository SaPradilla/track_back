import { CreateTaskDto } from "../dtos/task/create-task.dto";
import { TaskEntity } from "../entities/task.entity";


export abstract class TaskRepository{

    abstract create(taskDto:CreateTaskDto):Promise<TaskEntity>;
    abstract list():Promise<TaskEntity[]>;
}