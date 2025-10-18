export interface IWeatherAPIResponse {

    name: string;
    region: string;
    country: string;
    condition: string;
    temperatureInF: number,
    temperatureInC: number,
    icon: string;
    isDay: boolean
}