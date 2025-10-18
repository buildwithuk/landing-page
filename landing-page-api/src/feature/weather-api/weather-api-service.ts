import { injectable } from "inversify";
import { IWeatherAPIResponse } from "./weather-api-schema";


@injectable()
export class WeatherService {

    private readonly API_URL: string = "https://api.weatherapi.com/v1/current.json?"

    public async getWeather(longitude: number, latitude: number): Promise<IWeatherAPIResponse> {


        let apiURL = `${this.API_URL}q=${longitude},${latitude}&key=${process.env.WEATHER_API_KEY}`;
        console.log(apiURL);

        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        let weatherEnv: IWeatherAPIResponse = {
            condition: data.current.condition.text,
            icon: data.current.condition.icon,
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            temperatureInF: data.current.temp_f,
            temperatureInC: data.current.temp_c,
            isDay: data.current.is_day

        }

        return weatherEnv;

    }
}