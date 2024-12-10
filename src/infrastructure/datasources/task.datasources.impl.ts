import { HourlyRateModel } from "../../data/mongodb/models/hourly-rate.model";
import { TaskModel } from "../../data/mongodb/models/task.model";
import { CustomError } from "../../domain";
import { TaskDatasource } from "../../domain/datasources/task.datasource";
import { CreateTaskDto } from "../../domain/dtos/task/create-task.dto";
import { TaskEntity } from "../../domain/entities/task.entity";
import { TaskMapper } from "../mappers/task.mapper";


export class TaskDatasourceImpl implements TaskDatasource{



    async create(taskDto: CreateTaskDto): Promise<TaskEntity> {
        const {
            userId,
            title,
            description,
            startDate,
            endDate,
            hoursWorked,
            hourlyRateId,
            status
        } = taskDto;
        try {
            
            const hourlyRate = await HourlyRateModel.findById(hourlyRateId);
            if(!hourlyRate){
                throw CustomError.notFound('Hourly rate not found');
            }

            const taskCreate = await TaskModel.create({
                userId:userId,
                title:title,
                description:description,
                startDate:startDate,
                endDate:endDate,
                hoursWorked:hoursWorked,
                hourlyRateId:hourlyRateId,
                status:status,
            })
            
            await taskCreate.save();

            return TaskMapper.taskEntityFromObject(taskCreate);


        } catch (error) {
            if(error instanceof CustomError){
                throw error;
            }    
            throw CustomError.internalServer()
        }
    
    }


    async list(): Promise<TaskEntity[]> {

        try {
            
            const tasks = await TaskModel.find();
            
            return tasks.map(task => TaskMapper.taskEntityFromObject(task));  

        } catch (error) {
            if(error instanceof CustomError){
                throw error;
            }
            throw CustomError.internalServer();
        }


    }



}