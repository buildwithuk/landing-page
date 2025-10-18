import  { useState, useEffect } from "react";

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
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
      },
      (err) => {
        // Dom something here
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
