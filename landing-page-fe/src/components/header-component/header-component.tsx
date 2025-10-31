import { Separator } from "@/components/ui/separator";
import { ThemeToggleButton } from "@/components/ui/shadcn-io/theme-toggle-button";
import { Toggle } from "@radix-ui/react-toggle";
import { Cloud, CloudLightning, CloudRain, CloudRainWind, Cloudy, Snowflake, SunDim, Thermometer } from "lucide-react";
import { type HeaderProps } from "../../props/header-component-props";
import type { ReactElement, FC } from "react";

export const HeaderComponent: FC<HeaderProps> = ({ env }): ReactElement => {
  // https://www.shadcn.io/button/theme-toggle#preview-button-theme-toggle-variants
  const currentTheme = "light";

  const getName = (): string => {
    
    let name = ""
    if (env){
      if (env.name) {
        name = env.name
      } 
      if (env.region) {
        name += ", " + env.region
      } 
      if (env.country) {
        name += ", " +  env.country
      }
    }
    return name;
    
  };

  const handleThemeToggle = () => {
    alert("Theme toggled");
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-row basis-2/3 content-center items-center">
        <div>
            {env.condition?.toLowerCase().includes("light rain") && <CloudRain />}
            {env.condition?.toLowerCase().includes("rain") && <CloudRainWind />}
            {env.condition?.toLowerCase().includes("snow") && <Snowflake />}
            {env.condition?.toLowerCase().includes("mist") && <SunDim />}
            {env.condition?.toLowerCase().includes("thund") && <CloudLightning />}
            {env.condition?.toLowerCase().includes("partly cloudy") && <Cloud />}
            {env.condition?.toLowerCase().includes("overcast")  && <Cloudy />}
          
          
        </div>
        <Separator orientation="vertical" className="mx-3" />
        <div>
          <h4 className="font-semibold font-medium  tracking-tight">
            {getName()}
          </h4>
        </div>
      </div>
      <div className="content-around flex flex-row-reverse basis-1/3 mr-5  content-center items-center">
        <ThemeToggleButton
          theme={currentTheme}
          onClick={handleThemeToggle}
          variant="circle"
          start="center"
        />

        <Separator orientation="vertical" className="mx-3" />
        <div className="content-around flex flex-row-reverse content-center items-center">
          <Toggle>
            <Thermometer />
          </Toggle>
        </div>
        <div className="content-around flex flex-row-reverse mr-4  content-center items-center">
          <h5> {env.temperatureInC} &deg;C</h5>
        </div>
      </div>
    </div>
  );
};
