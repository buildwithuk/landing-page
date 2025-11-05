import { injectable, inject } from "inversify";
import { Router, Request, Response } from "express";
import { FeedbackService } from "./feedback-service";
import { IFeedback } from "./feedback-interface";
import { StatusCodes } from "http-status-codes";


@injectable()
export class FeedbackRouter {

    public router: Router;

    constructor(@inject(FeedbackService) private feedbackService: FeedbackService) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {

        this.router.get("/", async (req: Request, res: Response) => {
            try {
                const feedbacks = await this.feedbackService.GetAllFeedbacks();
                res.status(StatusCodes.OK).json(feedbacks)
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something mysterious happened!" })
            }


        });

        this.router.post("/", async (req: Request<{}, {}, IFeedback>, res: Response) => {

            try {
                console.log(req.body)
                const result = await this.feedbackService.PostFeedback(req.body);
                res.status(200).json({ result });
            } catch (error) {
                console.log("exception: " + error)
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something mysterious happened!" })
            }


        });
    }
}