import { HourlyRateEntity } from "../entities/hourly-rate.entity";
import { UpdateHourlyRateDto } from '../dtos/hourly_rate/update-hourly-rate.dto';

export abstract class HourlyRateDataSource {
    abstract update(updateHourlyRateDto:UpdateHourlyRateDto,hourlyRateId:string): Promise<HourlyRateEntity>;
    abstract read(): Promise<HourlyRateEntity>;
}