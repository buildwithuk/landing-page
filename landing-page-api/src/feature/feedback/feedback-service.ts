import { injectable } from "inversify";

@injectable()
export class FeedbackService {

    public GetAllFeedbacks() {
        return [
            { name: "Feedback1", rating: 5 },
            { name: "Feedback1", rating: 5 },
            { name: "Feedback1", rating: 5 },
        ]
    }

    public PostFeedback(requestBody: any) : string {

        return "Feedback inserted successfully";

    }

}