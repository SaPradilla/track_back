import { Router } from "express";
import { HourlyRateDatasourceImpl } from "../../infrastructure/datasources/hourly-rate.datasources.impl";
import { HourlyRateRepositoryImpl } from "../../infrastructure/repositories/hourly-rate.repository.impl";
import { HourlyRateController } from "./controller";


export class HourlyRateRoutes {

    static get routes():Router{
        const router = Router();

        const datasource = new HourlyRateDatasourceImpl()
        const hourlyRateRepository = new HourlyRateRepositoryImpl(datasource)
        const controller = new HourlyRateController(hourlyRateRepository)

        router.put('/:id', controller.updateHourlyRate)

        return router;
    }


}