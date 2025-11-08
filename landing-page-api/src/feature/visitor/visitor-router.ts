import { Request, Response, Router } from "express";
import { injectable, inject } from "inversify";
import { VisitorService } from "./visitor-service";
import { StatusCodes } from "http-status-codes";

@injectable()
export class VisitorRouter {

    public router: Router;

    constructor(@inject(VisitorService) private visitorService: VisitorService) {

        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {

        this.router.get('/', async(req: Request, res: Response) => {


            const receivedVisitors = await this.visitorService.ReceiveVisitor();
            res.status(StatusCodes.OK).json({ visitors: receivedVisitors });

        })

        this.router.post('/receive-visitor', async (req: Request, res: Response) => {

            const receivedVisitors = await this.visitorService.ReceiveVisitor();
            res.status(StatusCodes.OK).json({ visitors: receivedVisitors });
        });
    }
}