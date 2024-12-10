import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { TaskRoutes } from "./task/routes";
import { HourlyRateRoutes } from "./hourly-rate/routes";

export class AppRoutes {

    static get routes(): Router{
        const router = Router();


        router.use('/auth', AuthRoutes.routes);
        router.use('/task',TaskRoutes.routes);
        router.use('/hourly-rate',HourlyRateRoutes.routes);

        return router;
    }
}