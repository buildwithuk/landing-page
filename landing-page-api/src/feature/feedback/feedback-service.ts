import { injectable } from "inversify";
import { Feedback } from "./feedback-schema";
import { IFeedback } from "./feedback-interface";


@injectable()
export class FeedbackService {

    public async GetAllFeedbacks() {

        console.log(await Feedback.find())
        
        return await Feedback.find();
    }

    public async PostFeedback(feedback: IFeedback): Promise<IFeedback> {

        console.log("Inside service: " +feedback)

        return await (new Feedback(feedback)).save();
    }

}