import { ITaskList } from "../../interfaces/task.interfaces";
import { TaskRepository } from "../../repositories/task.repositories";


interface ListTaskUseCase{
    execute(): Promise<ITaskList>
}

export class ListTask implements ListTaskUseCase{

    constructor(
        private readonly taskRepository:TaskRepository
    ){}

    async execute(): Promise<ITaskList> {

        const tasks = await this.taskRepository.list();

        return {
            msg: tasks.length > 0 ? 'Tasks retrieved successfully' : 'No tasks found',
            tasks
        }

    }



}