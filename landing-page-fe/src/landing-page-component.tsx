import { useEffect, useState } from "react";
import ContentComponent from "./components/content-component/content-component";
import FooterComponent from "./components/footer-component/footer-compose";
import HeaderComponent from "./components/header-component/header-component";
import type { ICurrentEnv } from "./interfaces/current-env";
import ExternalService from "./services/external-service";

function LandingPageComponent() {
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
          await ExternalService.GetCurrentEnvironmnet(longitude, latitude);
        setCurrentEnv(currentEnv);
        console.log(currentEnv);
      },
      (err) => {
        // Dom something here
        console.log(err);
      }
    );
  };

  return (
    <>
      <div>
        <p>{currentEnv && JSON.stringify(currentEnv)}</p>
        <div>
          <HeaderComponent></HeaderComponent>
        </div>
        <div>
          <ContentComponent></ContentComponent>
        </div>
        <div>
          <FooterComponent></FooterComponent>
        </div>
      </div>
    </>
  );
}

export default LandingPageComponent;
