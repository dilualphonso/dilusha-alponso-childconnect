import React, { useState } from "react";

import "./MapData.scss";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const MapData = ({ daycares }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (childCare) => {
    setSelectedLocation(childCare);
  };

  const handleInfoClose = () => {
    setSelectedLocation(null);
  };
  return (
    <section className="map">
      <div className="map__google">
        <APIProvider
          apiKey={"AIzaSyAzEQgX_hi-_Qnv6aWWIQDAdcLYnFPqQSQ"}
          libraries={["marker"]}
        >
          <Map
            mapId={"bf51a910020fa25a"}
            defaultZoom={12}
            defaultCenter={{ lat: 43.77887, lng: -79.17282 }}
            gestureHandling={"greedy"}
            disableDefaultUI
          >
            {daycares.length>0 &&
              daycares.map((childCare, key) => {
                /* Convert your longitude and latitude into a float first
             since your data stored it as a string. */

                const floatLat = parseFloat(childCare.latitude);
                const floatLng = parseFloat(childCare.longitude);
                return (
                  <AdvancedMarker
                    className="map__advancemaker"
                    key={key}
                    position={{ lat: floatLat, lng: floatLng }}
                    title={childCare.childcare_name}
                    onClick={() => handleMarkerClick(childCare)}
                  >
                    {selectedLocation === childCare && (
                      <div className="map__childcare">
                        <h3>{childCare.childcare_name}</h3>
                        <p>{childCare.address}</p>
                        <button onClick={handleInfoClose}>Close</button>
                      </div>
                    )}
                  </AdvancedMarker>
                );
              })}
          </Map>
        </APIProvider>
      </div>
    </section>
  );
};

export default MapData;
