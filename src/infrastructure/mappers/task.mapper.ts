import { CustomError } from "../../domain";
import { TaskEntity } from "../../domain/entities/task.entity";

export class TaskMapper{


    static taskEntityFromObject (object : { [key: string]: any }):TaskEntity{
        
        const {
            id,_id,
            userId,
            title,
            description,
            startDate,
            endDate,
            hoursWorked,
            hourlyRateId,
            status
        } = object;

        if(!_id || !id) throw CustomError.badRequest('Mising id');

        if(!userId) throw CustomError.badRequest('Missing userId');
        if(!title) throw CustomError.badRequest('Missing title');
        if(!description) throw CustomError.badRequest('Missing description');
        if(!startDate) throw CustomError.badRequest('Missing startDate');
        if(!endDate) throw CustomError.badRequest('Missing endDate');
        if(!hoursWorked) throw CustomError.badRequest('Missing hoursWorked');
        if(!hourlyRateId) throw CustomError.badRequest('Missing hourlyRateId');
        if(!status) throw CustomError.badRequest('Missing status');


        return new TaskEntity(
            id||_id,
            userId,
            title,
            description,
            startDate,
            endDate,
            hoursWorked,
            hourlyRateId,
            status,
        )

    }

}