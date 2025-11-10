import { Separator } from "@/components/ui/separator";
import { ThemeToggleButton } from "@/components/ui/shadcn-io/theme-toggle-button";
import { useTheme } from "next-themes";
import {
  Cloud,
  CloudLightning,
  CloudRain,
  CloudRainWind,
  Cloudy,
  MoonStar,
  Snowflake,
  Sun,
  SunDim,
  SunMedium,
  Thermometer,
} from "lucide-react";
import { type HeaderProps } from "../../props/header-component-props";
import {
  type ReactElement,
  type FC,
  type JSX,
  useEffect,
  useState,
} from "react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

export const HeaderComponent: FC<HeaderProps> = ({ env }): ReactElement => {
  const currentTheme = env.isDay ? "light" : "dark";
  const { theme, setTheme } = useTheme();

  type TemperatureScale = "Celsius" | "Fahrenheit";
  const [temperatureScale, setTemperatureScale] =
    useState<TemperatureScale>("Celsius");
  const switchTemperature = () => {
    if (temperatureScale === "Celsius") {
      setTemperatureScale("Fahrenheit");
    } else {
      setTemperatureScale("Celsius");
    }
  };

  useEffect(() => {
    setTheme(currentTheme);
  }, []);

  const getName = (): string => {
    let name = "";
    if (env) {
      if (env.name) {
        name = env.name;
      }
      if (env.region) {
        name += ", " + env.region;
      }
      if (env.country) {
        name += ", " + env.country;
      }
    }
    return name;
  };

  const getWeatherIcon = (): JSX.Element => {
    if (env) {
      if (env.isDay) {
        if (env.condition?.toLowerCase() == "sunny") return <SunMedium />;
        if (env.condition?.toLowerCase().includes("light rain"))
          return <CloudRain />;
        if (env.condition?.toLowerCase().includes("rain"))
          return <CloudRainWind />;
        if (env.condition?.toLowerCase().includes("snow")) return <Snowflake />;
        if (env.condition?.toLowerCase().includes("mist")) return <SunDim />;
        if (env.condition?.toLowerCase().includes("thund"))
          return <CloudLightning />;
        if (env.condition?.toLowerCase().includes("partly cloudy"))
          return <Cloud />;
        if (env.condition?.toLowerCase().includes("overcast"))
          return <Cloudy />;
        if (env.condition?.toLocaleLowerCase().includes("clear"))
          return <Sun />;
      } else {
        if (env.condition?.toLowerCase().includes("light rain"))
          return <CloudRain />;
        if (env.condition?.toLowerCase().includes("rain"))
          return <CloudRainWind />;
        if (env.condition?.toLowerCase().includes("snow")) return <Snowflake />;
        if (env.condition?.toLowerCase().includes("mist")) return <SunDim />;
        if (env.condition?.toLowerCase().includes("thund"))
          return <CloudLightning />;
        if (env.condition?.toLowerCase().includes("partly cloudy"))
          return <Cloud />;
        if (env.condition?.toLowerCase().includes("overcast"))
          return <Cloudy />;
        if (env.condition?.toLocaleLowerCase().includes("clear"))
          return <MoonStar />;
      }
    } else {
      return <Skeleton />;
    }
    return <Skeleton />;
  };

  return (
    <div className="flex flex-row px-10 ">
      <div className="flex flex-row basis-2/3 content-center items-center">
        <div>{getWeatherIcon()}</div>
        <Separator orientation="vertical" className="mx-3" />
        <div>
          <h4 className="font-semibold font-medium tracking-tight">
            {getName()}
          </h4>
        </div>
      </div>
      <div className="content-around flex flex-row-reverse basis-1/3  content-center items-center">
        <ThemeToggleButton
          className="cursor-not-allowed"
          theme={currentTheme}
          variant="circle-blur"
          start="top-right"
        />

        <Separator orientation="vertical" className="mx-3" />
        <div className="content-around flex flex-row-reverse content-center items-center">
          <Button
            variant="outline"
            onClick={switchTemperature}
            className="cursor-pointer "
          >
            <Thermometer />
          </Button>
        </div>
        <div className="content-around flex flex-row-reverse mr-4  content-center items-center">
          {temperatureScale == "Celsius" && (
            <h5> {env.temperatureInC} &deg;C</h5>
          )}
          {temperatureScale == "Fahrenheit" && (
            <h5> {env.temperatureInF} &deg;F</h5>
          )}
        </div>
      </div>
    </div>
  );
};
