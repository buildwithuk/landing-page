import { useEffect, useState, type ReactElement, type FC } from "react";
import { ContentComponent } from "./components/content-component/content-component";
import { FooterComponent } from "./components/footer-component/footer-compose";
import { HeaderComponent } from "./components/header-component/header-component";
import type { ICurrentEnv } from "./interfaces/current-env";
import ExternalService from "./services/external-service";
import type { ReceiveVisitors } from "./interfaces/receive-visitors";

export const LandingPageComponent: FC = (): ReactElement => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );

  const [currentEnv, setCurrentEnv] = useState<ICurrentEnv>();

  useEffect(() => {
    receiveVisitor();
    getLocation();
    
  }, []);

  const receiveVisitor = async () => {
    const response = await ExternalService.ReceiveVisitor<ReceiveVisitors>();
    console.log(response)
  }

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
      <div className="p-2 flex flex-col min-h-screen landing-page-light-bg" >
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

          <ContentComponent></ContentComponent>
        <footer>
          <FooterComponent></FooterComponent>
        </footer>
      </div>
    </>
  );
};
