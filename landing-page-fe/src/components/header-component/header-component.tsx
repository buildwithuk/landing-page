import { Separator } from "@/components/ui/separator";
import {
  ThemeToggleButton,
  useThemeTransition,
} from "@/components/ui/shadcn-io/theme-toggle-button";
import { Toggle } from "@radix-ui/react-toggle";
import { Snowflake, Thermometer } from "lucide-react";

import type { ReactElement, FC } from "react";

export const HeaderComponent: FC = (): ReactElement => {
  // https://www.shadcn.io/button/theme-toggle#preview-button-theme-toggle-variants
  const currentTheme = "light";

  const handleThemeToggle = () => {
    alert("Theme toggled");
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-row basis-2/3 content-center items-center">
        <div>
          <Snowflake />
        </div>
        <Separator orientation="vertical" className="mx-3" />
        <div>
          <h4 className="font-semibold font-medium  tracking-tight">
            Hello world
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
          <h5> 31&deg;C</h5>
        </div>
      </div>
    </div>
  );
};
