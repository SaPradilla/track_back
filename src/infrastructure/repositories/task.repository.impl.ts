import { TaskDatasource } from '../../domain/datasources/task.datasource';
import { CreateTaskDto } from '../../domain/dtos/task/create-task.dto';
import { TaskEntity } from '../../domain/entities/task.entity';
import { TaskRepository } from '../../domain/repositories/task.repositories';


export class TaskRepositoryImpl implements TaskRepository{

    constructor(
        private readonly taskDatasource:TaskDatasource,
    ){}

    create(taskDto: CreateTaskDto): Promise<TaskEntity> {
        return this.taskDatasource.create(taskDto);
    }
    list(): Promise<TaskEntity[]> {
        return this.taskDatasource.list()
    }

    


}