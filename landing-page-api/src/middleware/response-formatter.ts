import { NextFunction, Request, Response } from "express";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

interface IApiResponse {
    status: "success" | "error";
    statusCode: number;
    message: string;
    data?: any;
}

export function formatAPIResponse(
    req: Request,
    res: Response,
    next: NextFunction

) {

    const originalResponse = res.json.bind(res)

    res.json = (data: any): Response => {
        // Ensure it returns Response
        // Check if the status code has been set, use 200 OK if not set
        const statusCode = res.statusCode ? res.statusCode : StatusCodes.OK;

        // Construct the standardized response structure
        const response: IApiResponse = {
            status: statusCode >= 200 && statusCode < 300 ? "success" : "error",
            statusCode: statusCode,
            message: getReasonPhrase(res.statusCode),
        };

        if (statusCode >= 200 && statusCode < 300) {
            response.data = data.meta ? data.data : data;
        }
        return originalResponse(response);
    };

    next();
}