import { Request, Response} from 'express'
import { UpdateHourlyRateDto } from "../../domain/dtos/hourly_rate/update-hourly-rate.dto";
import { HourlyRateRepository } from "../../domain/repositories/hourly-rate.repositories";
import { CustomError } from '../../domain';
import { UpdateHourlyRate } from '../../domain/use-cases/hourly-rate/update-hourly-rate.use-case';

export class HourlyRateController {

    constructor(
        private readonly hourlyRateRepository: HourlyRateRepository
    ){}

    private handleError = ( error: unknown, res: Response) =>{
        if( error instanceof CustomError){
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(error)
        return res.status(500).json({error:'Internal Server Error '})
    }

    updateHourlyRate = (req: Request, res : Response)=>{
        
        const [error, updateHourlyRateDto,id] = UpdateHourlyRateDto.update(req.body,req.params)
        if( error) return res.status(400).json({error})

        new UpdateHourlyRate( this.hourlyRateRepository )
            .execute(updateHourlyRateDto!,id!)
            .then(data => res.json(data))
            .catch(error => this.handleError(error,res))
        
    }

}