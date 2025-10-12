import { Container } from "inversify";
import { Feedback } from "../repositories/feedback";

export const container: Container = new Container();

container.bind(Feedback).toSelf(); // Transient scope