import { injectable } from "inversify";


@injectable()
export class CurrentEnvironmentService {

    public GetCurrentEnvironment(longitude: number, latitude: number) : string {

        return `The current environment with ${longitude} and ${latitude}`;
    }

    public ReceiveVisitor() : number {
        // Do something here
        return 1;
    }


}