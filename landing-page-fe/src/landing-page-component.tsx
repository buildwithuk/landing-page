import { useEffect, useState, type ReactElement, type FC } from "react";
import { ContentComponent } from "./components/content-component/content-component";
import { FooterComponent } from "./components/footer-component/footer-compose";
import { HeaderComponent } from "./components/header-component/header-component";
import type { ICurrentEnv } from "./interfaces/current-env";
import ExternalService from "./services/external-service";

export const LandingPageComponent: FC = (): ReactElement => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );

  const [currentEnv, setCurrentEnv] = useState<ICurrentEnv>();

  // 👇 Automatically call on load
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      // Do something here
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });

        const currentEnv: ICurrentEnv =
          await ExternalService.GetCurrentEnvironmnet(latitude,longitude);
        setCurrentEnv(currentEnv);
      },
      (err) => {
        // Dom something here
        console.log(err);
      }
    );
  };

  return (
    <>
      <div className="p-2 flex flex-col min-h-screen">
        <header>
          <HeaderComponent
            env={{
              condition: currentEnv?.condition!,
              country: currentEnv?.country!,
              isDay: currentEnv?.isDay!,
              name: currentEnv?.name!,
              region: currentEnv?.region!,
              temperatureInC: currentEnv?.temperatureInC!,
              temperatureInF: currentEnv?.temperatureInF!,
              icon: currentEnv?.icon!
            }}
          ></HeaderComponent>
        </header>

        <section className="flex-1 mt-2 bg-gray-50">
          <ContentComponent></ContentComponent>
        </section>
        <footer>
          <FooterComponent></FooterComponent>
        </footer>
      </div>
    </>
  );
};
