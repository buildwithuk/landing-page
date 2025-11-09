import { injectable } from "inversify";
import { Visitors } from "./visitor-schema";


@injectable()
export class VisitorService {

    public async GetVisitors(): Promise<number> {

        // Get the total visitors 

        let documents = await Visitors.find();

        if (documents && documents.length == 1) {
            return await documents[0]!.visitorsReceived;

        } else if (documents.length == 0) {

            return 1;
        } else {
            throw new Error("I have messed up!");
        }
    }

    public async ReceiveVisitor(): Promise<number> {

        // Get the total visitors 

        let documents = await Visitors.find();

        if (documents && documents.length == 1) {

            let document = documents[0];

            document!.visitorsReceived++;
            document!.lastVisited = new Date();

            return (await document!.save()).visitorsReceived;

        } else if (documents.length == 0) {

            await Visitors.insertOne({ visitorsReceived: 1 });
            return 1;
        } else {
            throw new Error("I have messed up!");
        }
    }

}