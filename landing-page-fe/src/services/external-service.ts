import type { IReceiveVisitors } from "@/interfaces/receive-visitors";
import type { ICurrentEnv } from "../interfaces/current-env";
import type { IApiResponse } from "../interfaces/http-response";
import type { IFeedbackRequest } from "@/interfaces/feedback-request";

class ExternalService {
  public static async SubmitFeedback(
    request: IFeedbackRequest,
  ): Promise<IFeedbackRequest> {
    const _SubmitFeedback: string = `http://landing-page-production-db37.up.railway.app/feedback`;
    const response = await this._SendPostRequest<
      IFeedbackRequest,
      IFeedbackRequest
    >(_SubmitFeedback, request);
    console.log(response);
    return response;
  }

  public static async GetVisitors<T>(): Promise<T> {
    const _GetVisitorsUrl: string = `http://landing-page-production-db37.up.railway.app/visitor`;
    const response: T =
      await ExternalService._SendGetRequest<T>(_GetVisitorsUrl);
    console.log(response);
    return response;
  }

  public static async GetCurrentEnvironmnet(
    longitude: number,
    latitude: number,
  ): Promise<ICurrentEnv> {
    const _GetCurrentEnvURL: string = `http://landing-page-production-db37.up.railway.app/current-env/${longitude}/${latitude}`;

    const response: ICurrentEnv =
      await ExternalService._SendGetRequest<ICurrentEnv>(_GetCurrentEnvURL);
    console.log(response);
    return response;
  }

  private static _GetHeaders(): HeadersInit {
    return {
      "Content-type": "application/json",
    };
  }

  public static async ReceiveVisitor(): Promise<IReceiveVisitors> {
    const _ReceiveVisitor: string = `http://landing-page-production-db37.up.railway.app/visitor/receive-visitor`;
    return await this._SendPostRequest<IReceiveVisitors, any>(
      _ReceiveVisitor,
      null,
    );
  }

  public static async _SendPostRequest<T, K>(url: string, reqBody: K) {
    const response = await fetch(url, {
      method: "POST",
      headers: ExternalService._GetHeaders(),
      body: reqBody != null ? JSON.stringify(reqBody) : null,
    });
    console.log(response);
    if (response.ok) {
      let apiResponse: IApiResponse = await response.json();
      let responseData = apiResponse.data as T;

      return responseData;
    } else {
      throw new Error("Some error occured");
    }
  }

  private static async _SendGetRequest<T>(url: string): Promise<T> {
    const response = await fetch(url);
    console.log(response);
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
