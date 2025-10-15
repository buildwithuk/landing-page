import { injectable, inject } from "inversify";
import { Router, Request, Response } from "express";
import { FeedbackService } from "./feedback-service";
import { IFeedback } from "./feedback-interface";

@injectable()
export class FeedbackRouter {

    public router: Router;

    constructor(@inject(FeedbackService) private feedbackService: FeedbackService) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {

        this.router.get("/", async (req: Request, res: Response) => {

            const feedbacks = await this.feedbackService.GetAllFeedbacks();
            res.status(200).json(feedbacks)

        });

        this.router.post("/", async (req: Request<{}, {}, IFeedback>, res: Response) => {

            console.log(req.body);
            const result = await this.feedbackService.PostFeedback(req.body);
            res.status(200).json({ result });

        });
    }
}