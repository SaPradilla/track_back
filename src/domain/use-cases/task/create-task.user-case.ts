import { CreateTaskDto } from '../../dtos/task/create-task.dto';
import { ITaskCreated } from '../../interfaces/task.interfaces';
import { TaskRepository } from '../../repositories/task.repositories';


interface CreateTaskUseCase{
    execute(createTaskDto:CreateTaskDto):Promise<ITaskCreated>
}

export class CreateTask implements CreateTaskUseCase {

    constructor(
        private readonly taskRepository:TaskRepository
    ){}

    async execute(createTaskDto: CreateTaskDto): Promise<ITaskCreated> {

        const taskCreate = await this.taskRepository.create(createTaskDto);

        return {
            msg:'Task created!',
            task:{
                id: taskCreate.id,
                userId:taskCreate.userId,
                title: taskCreate.title,
                description: taskCreate.description,
                startDate: taskCreate.startDate,
                endDate: taskCreate.endDate,
                hoursWorked: taskCreate.hoursWorked,
                hourlyRateId: taskCreate.hourlyRateId,
                status: taskCreate.status,
            }
        }
    }


}