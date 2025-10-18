import { inject, injectable } from "inversify";
import { WeatherService } from "../weather-api/weather-api-service";
import { IWeatherAPIResponse } from "../weather-api/weather-api-schema";


@injectable()
export class CurrentEnvironmentService {

    constructor(@inject(WeatherService) private weatherService: WeatherService) { }

    public async GetCurrentEnvironment(longitude: number, latitude: number): Promise<IWeatherAPIResponse> {
        return await this.weatherService.getWeather(longitude, latitude);
    }
}