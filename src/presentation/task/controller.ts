import { CustomError } from "../../domain";
import { TaskRepository } from "../../domain/repositories/task.repositories";
import { Request, Response} from 'express'
import { CreateTaskDto } from '../../domain/dtos/task/create-task.dto';
import { CreateTask } from "../../domain/use-cases/task/create-task.user-case";
import { ListTask } from "../../domain/use-cases/task/list-task.user-case";


export class TaskController{


    constructor(
        private readonly taskRepository:TaskRepository
    ){}

    private handleError = ( error: unknown, res: Response) =>{
        if( error instanceof CustomError){
            console.log(error)
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(error)
        return res.status(500).json({errorMessage:'Internal Serverr Error ',error: error})
    }

    createTask = async(req:Request,res:Response)=>{
        
        const [error,createTaskDto] = CreateTaskDto.create(req.body);
        if( error) return res.status(400).json({error});

        new CreateTask(this.taskRepository)
            .execute(createTaskDto!)
            .then(data=>res.json(data))
            .catch(error=>this.handleError(error,res))

    }

    list = async(req:Request,res:Response)=>{
        new ListTask(this.taskRepository)
            .execute()
            .then(data=>res.json(data))
            .catch(error=>this.handleError(error,res))
    }

}