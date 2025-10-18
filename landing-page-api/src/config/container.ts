import { Container } from "inversify";
import { FeedbackRouter } from "../feature/feedback/feedback-router";
import { FeedbackService } from "../feature/feedback/feedback-service";
import { CurrentEnvironmentRouter } from "../feature/current-env/current-env-router";
import { CurrentEnvironmentService } from "../feature/current-env/current-env-service";
import { VisitorService } from "../feature/visitor/visitor-service";
import { VisitorRouter } from "../feature/visitor/visitor-router";


export const container: Container = new Container();

// Feedback items
container.bind(FeedbackRouter).toSelf().inTransientScope(); // Transient scope
container.bind(FeedbackService).toSelf().inTransientScope(); // Transient scope

// Current Environment items
container.bind(CurrentEnvironmentRouter).toSelf().inTransientScope();
container.bind(CurrentEnvironmentService).toSelf().inTransientScope();

// Visitor items
container.bind(VisitorService).toSelf().inTransientScope();
container.bind(VisitorRouter).toSelf().inTransientScope();