import { Request, Response, Router } from "express";
import { injectable, inject } from "inversify";
import { CurrentEnvironmentService } from "./current-env-service";
import { StatusCodes } from "http-status-codes";

@injectable()
export class CurrentEnvironmentRouter {

    public router: Router;

    constructor(@inject(CurrentEnvironmentService) private currentEnviornmentService: CurrentEnvironmentService) {

        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {

        this.router.get('/:longitude/:latitude', (req: Request, res: Response) => {

            const longitude: number = Number(req.params.longitude);
            const latitude: number = Number(req.params.latitude);

            const returnService = this.currentEnviornmentService.GetCurrentEnvironment(longitude, latitude);
            res.status(StatusCodes.OK).json(returnService);
        });
    }

}