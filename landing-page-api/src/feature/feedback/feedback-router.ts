import { injectable, inject } from "inversify";
import { Router, Request, Response } from "express";
import { FeedbackService } from "./feedback-service";

@injectable()
export class FeedbackRouter {

    public router: Router;

    constructor(@inject(FeedbackService) private feedbackService: FeedbackService) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {

        this.router.get("/", (req: Request, res: Response) => {

            const feedbacks = this.feedbackService.GetAllFeedbacks();
            res.status(200).json(feedbacks)

        });

        this.router.post("/", (req: Request, res: Response) => {

            const returnMessage = this.feedbackService.PostFeedback(req.body());
            res.status(200).json({ returnMessage });

        });
    }
}