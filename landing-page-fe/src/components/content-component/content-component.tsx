import { useState, useEffect } from "react";
import ExternalService from "../../services/external-service";

function ContentComponent() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );

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

        await ExternalService.GetCurrentEnvironmnet(latitude, longitude);
      },
      (err) => {
        // Dom something here
        console.log(err);
      }
    );
  };

  return (
    <div>
      <h1> Content component </h1>
      <div> Latitude {location?.lat} </div>
      <div> Longitude {location?.lon} </div>
      <div data-role="counter" data-value="100">
        0
      </div>
    </div>
  );
}

export default ContentComponent;
