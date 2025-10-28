
import type { ICurrentEnv } from "../interfaces/current-env";
import type { IApiResponse } from "../interfaces/http-response";


class ExternalService {

    public static async GetCurrentEnvironmnet(longitude: number, latitude: number): Promise<ICurrentEnv> {

        const url: string = `https://landing-page-production-db37.up.railway.app/current-env/${longitude}/${latitude}`;
        const response: ICurrentEnv = await this._SendGetRequest<ICurrentEnv>(url);

        return response;

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