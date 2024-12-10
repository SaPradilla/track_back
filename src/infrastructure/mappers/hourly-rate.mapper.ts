import { CustomError } from "../../domain";
import { HourlyRateEntity } from "../../domain/entities/hourly-rate.entity";


export class HourlyRateMapper {

    static toEntityFromObject (object : { [key: string]: any }): HourlyRateEntity {
        const { id,_id, rate } = object;

        if(!_id || !id) throw CustomError.badRequest('Mising id');
        if(!rate) throw CustomError.badRequest('Missing rate');

        return new HourlyRateEntity(
            id||_id,
            rate
        )

    }
}