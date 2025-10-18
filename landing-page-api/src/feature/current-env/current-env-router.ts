import { Request, Response, Router } from "express";
import { injectable, inject } from "inversify";
import { CurrentEnvironmentService } from "./current-env-service";
import { StatusCodes } from "http-status-codes";
import { IWeatherAPIResponse } from "../weather-api/weather-api-schema";

@injectable()
export class CurrentEnvironmentRouter {

    public router: Router;

    constructor(@inject(CurrentEnvironmentService) private currentEnviornmentService: CurrentEnvironmentService) {

        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {

        this.router.get('/:longitude/:latitude', async (req: Request, res: Response) => {

            const longitude: number = Number(req.params.longitude);
            const latitude: number = Number(req.params.latitude);

            const weatherAPIResponse: IWeatherAPIResponse = await this.currentEnviornmentService.GetCurrentEnvironment(longitude, latitude);

            res.status(StatusCodes.OK).json(weatherAPIResponse);
        });
    }

}