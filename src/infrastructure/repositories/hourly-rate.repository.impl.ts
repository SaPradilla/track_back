import { HourlyRateDataSource } from "../../domain/datasources/hourly-rate.datasource";
import { UpdateHourlyRateDto } from "../../domain/dtos/hourly_rate/update-hourly-rate.dto";
import { HourlyRateEntity } from "../../domain/entities/hourly-rate.entity";
import { HourlyRateRepository } from "../../domain/repositories/hourly-rate.repositories";

export class HourlyRateRepositoryImpl implements HourlyRateRepository{

    constructor(
        private readonly hourlyRateDatasource: HourlyRateDataSource
    ){}

    update(updateHourlyRateDto: UpdateHourlyRateDto, hourlyRateId: string): Promise<HourlyRateEntity> {
        return this.hourlyRateDatasource.update(updateHourlyRateDto, hourlyRateId);
    }
    
    read(): Promise<HourlyRateEntity> {
        throw new Error("Method not implemented.");
    }

}