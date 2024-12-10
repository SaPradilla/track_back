import { HourlyRateModel } from "../../data/mongodb/models/hourly-rate.model";
import { CustomError } from "../../domain";
import { HourlyRateDataSource } from "../../domain/datasources/hourly-rate.datasource";
import { UpdateHourlyRateDto } from "../../domain/dtos/hourly_rate/update-hourly-rate.dto";
import { HourlyRateEntity } from "../../domain/entities/hourly-rate.entity";
import { HourlyRateMapper } from "../mappers/hourly-rate.mapper";


export class HourlyRateDatasourceImpl implements HourlyRateDataSource{

    async update(updateHourlyRateDto: UpdateHourlyRateDto, hourlyRateId: string): Promise<HourlyRateEntity> {
        const { rate } = updateHourlyRateDto;
        try {
            
            const hourlyRate = await HourlyRateModel.findByIdAndUpdate(
                hourlyRateId,
                { rate },
                { new: true }
            );
            
            if(!hourlyRate){
                throw CustomError.notFound('Hourly rate not found')
            }
            return HourlyRateMapper.toEntityFromObject(hourlyRate);

        } catch (error) {
            if(error instanceof CustomError){
                throw error;
            }    
            throw CustomError.internalServer()
        }

    }
    read(): Promise<HourlyRateEntity> {
        throw new Error("Method not implemented.");
    }


}