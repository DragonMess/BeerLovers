import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { Icon } from "leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useApplication from "./hooks/useApplicationData";
const beer = new Icon({
  iconUrl: "./images/BeerIcon.svg",
  iconSize: [25, 25],
});

const MapProducts = () => {
  const { state, setState } = useApplication();

  // console.log(state.favourites);
  const position = [45.6017, -73.65];
  return (
    <Map center={position} zoom={9.5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {state.breweries.map((mark) => {
        return (
          <Marker
            key={mark.brewer_id}
            idMark={mark.id}
            position={[mark.coordinates_x, mark.coordinates_y]}
            trade_name={mark.trade_name}
            brewer_id={mark.brewer_id}
            // icon={beer}
          >
            <Popup>
              <a href="/Products">
                <h4>{mark.trade_name}</h4>
              </a>
              <h6>Click to see our products</h6>
            </Popup>
          </Marker>
        );
      })}
    </Map>
  );
};
export default MapProducts;
