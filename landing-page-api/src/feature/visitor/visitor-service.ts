import { injectable } from "inversify";
import { Visitors } from "./visitor-schema";


@injectable()
export class VisitorService {

    public async ReceiveVisitor(): Promise<number> {

        // Get the total visitors 

        let documents = await Visitors.find();

        console.log("Result of documents: " + documents.length)

        if (documents && documents.length == 1) {

            let document = documents[0];

            document!.visitorsReceived++;
            return (await document!.save()).visitorsReceived;

        } else if (documents.length == 0) {

            await Visitors.insertOne({ visitorsReceived: 1 });
            return 1;
        } else {
            throw new Error("I have messaged up!");
        }
    }

}