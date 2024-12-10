import { UpdateHourlyRateDto } from "../../dtos/hourly_rate/update-hourly-rate.dto";
import { IHourlyRate } from "../../interfaces/hourly-rate.interface";
import { HourlyRateRepository } from "../../repositories/hourly-rate.repositories";

interface UpdateHourlyRateUseCase {
    execute(updateHourlyRateDto: UpdateHourlyRateDto,hourlyRateId:string): Promise<IHourlyRate>;
}

export class UpdateHourlyRate implements UpdateHourlyRateUseCase {
    constructor(
        private readonly hourlyRateRepository: HourlyRateRepository,
    ) { }

    async execute(updateHourlyRateDto: UpdateHourlyRateDto,hourlyRateId:string): Promise<IHourlyRate> {
        const hourlyRate = await this.hourlyRateRepository.update(updateHourlyRateDto,hourlyRateId);
        return {
            msg: 'Hourly rate updated successfully',
            data:hourlyRate
        }
    }

}