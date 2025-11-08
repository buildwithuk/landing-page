
import type { ICurrentEnv } from "../interfaces/current-env";
import type { IApiResponse } from "../interfaces/http-response";
import type { IFeedbackRequest } from "@/interfaces/feedback-request";


class ExternalService {


    public static async GetVisitors<T>() : Promise<T> {

        const _GetVisitorsUrl: string = `https://landing-page-production-db37.up.railway.app/visitor`;

        const response: T = await this._SendGetRequest<T>(_GetVisitorsUrl);

        return response;
    }

    public static async GetCurrentEnvironmnet(longitude: number, latitude: number): Promise<ICurrentEnv> {

        const _GetCurrentEnvURL: string = `https://landing-page-production-db37.up.railway.app/current-env/${longitude}/${latitude}`;

        const response: ICurrentEnv = await this._SendGetRequest<ICurrentEnv>(_GetCurrentEnvURL);

        return response;

    }

    public static async SaveFeedback<T>(feedbackRequest: IFeedbackRequest): Promise<T> {

        console.log(feedbackRequest)

        const _SaveFeedbackUrl: string = `https://landing-page-production-db37.up.railway.app/feedback`;

        const response = await fetch(_SaveFeedbackUrl, { headers: ExternalService._GetHeaders(),  method: "POST", body: JSON.stringify(feedbackRequest) });

        console.log(response)

        if (response.ok) {

            let apiResponse: IApiResponse = await response.json();
            let feedbackResponse = apiResponse.data as T;

            return feedbackResponse;

        } else {
            throw new Error("Some error occured");
        }
    }

    private static _GetHeaders() : HeadersInit {
        return {
            "Content-type": "application/json"
        }
    }


    public static async ReceiveVisitor<T>(): Promise<T> {

        const _ReceiveVisitor: string = `https://landing-page-production-db37.up.railway.app/visitor/receive-visitor`;

        const response = await fetch(_ReceiveVisitor, { method: "POST" });

        console.log(response)

        if (response.ok) {

            let apiResponse: IApiResponse = await response.json();
            let currentEnvData = apiResponse.data as T;

            return currentEnvData;

        } else {
            throw new Error("Some error occured");
        }
    }


    private static async _SendGetRequest<T>(url: string): Promise<T> {

        const response = await fetch(url);

        if (response.ok) {

            let apiResponse: IApiResponse = await response.json();
            let currentEnvData = apiResponse.data as T;

            return currentEnvData;

        } else {
            throw new Error("Some error occured");
        }
    }
}

export default ExternalService;