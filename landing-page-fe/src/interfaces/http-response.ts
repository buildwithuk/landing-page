
export interface IApiResponse {
    status: "success" | "error";
    statusCode: number;
    message: string;
    data?: any;
}
