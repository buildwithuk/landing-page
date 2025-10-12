import { Application } from "express";
import { container } from "./container";
import { FeedbackRouter } from "../feature/feedback/feedback-router";
import { CurrentEnvironmentRouter } from "../feature/current-env/current-env-router";

export function addRoutes(app: Application): Application {

    const feedbackRouter = container.get<FeedbackRouter>(FeedbackRouter);
    const currentEnvRouter = container.get<CurrentEnvironmentRouter>(CurrentEnvironmentRouter);

    app.use("/feedback", feedbackRouter.router);
    app.use("/current-env", currentEnvRouter.router);

    return app;
}