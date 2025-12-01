import { useEffect, useState, type ReactElement, type FC } from "react";
import { ContentComponent } from "./components/content-component/content-component";
import { FooterComponent } from "./components/footer-component/footer-compose";
import { HeaderComponent } from "./components/header-component/header-component";
import type { ICurrentEnv } from "./interfaces/current-env";
import ExternalService from "./services/external-service";
import type { IReceiveVisitors } from "./interfaces/receive-visitors";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { Skeleton } from "./components/ui/skeleton";
import type { IFeedbackRequest } from "./interfaces/feedback-request";
import { useFetchVisitors } from "./hooks/useFetchVisitors.hooks";

export const LandingPageComponent: FC = (): ReactElement => {
  const { data} = useFetchVisitors({});

  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );

  const [currentEnv, setCurrentEnv] = useState<ICurrentEnv>();

  useEffect(() => {
    receiveVisitor();
    getLocation();
  }, []);

  const receiveVisitor = async () => {
    await ExternalService.ReceiveVisitor();
  };

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
          await ExternalService.GetCurrentEnvironmnet(latitude, longitude);
        setCurrentEnv(currentEnv);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
    
      <div className="tracking-wider h-screen w-screen flex justify-center items-center flex-column">
        <Card className="w-7xl justify-center opacity-70">
          <CardHeader>
            {!currentEnv && <Skeleton className="w-auto" />}
            {currentEnv && (
              <HeaderComponent
                env={{
                  condition: currentEnv?.condition!,
                  country: currentEnv?.country!,
                  isDay: currentEnv?.isDay!,
                  name: currentEnv?.name!,
                  region: currentEnv?.region!,
                  temperatureInC: currentEnv?.temperatureInC!,
                  temperatureInF: currentEnv?.temperatureInF!,
                  icon: currentEnv?.icon!,
                }}
              />
            )}
          </CardHeader>

          <CardContent>
            {!data && <Skeleton className="h-100 w-auto" />}
            {data && (
              <ContentComponent visitors={data?.visitors}></ContentComponent>
            )}
              {data && currentEnv && <FooterComponent />}
          </CardContent>
          
          
        </Card>
      </div>
    </>
  );
};
