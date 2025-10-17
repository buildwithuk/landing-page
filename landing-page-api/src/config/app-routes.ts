import { Application } from "express";
import { container } from "./container";
import { FeedbackRouter } from "../feature/feedback/feedback-router";
import { CurrentEnvironmentRouter } from "../feature/current-env/current-env-router";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


export function addRoutes(app: Application): Application {

    const feedbackRouter = container.get<FeedbackRouter>(FeedbackRouter);
    const currentEnvRouter = container.get<CurrentEnvironmentRouter>(CurrentEnvironmentRouter);

    app.use("/feedback", feedbackRouter.router);
    app.use("/current-env", currentEnvRouter.router);
    app.use("/", (req:Request, res:Response) => {

        res.status(StatusCodes.OK).send("Hello World")
    })

    return app;
}