import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { Icon } from "leaflet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useApplication from "./hooks/useApplicationData";
const beer = new Icon({
  iconUrl: "./images/BeerIcon.svg",
  iconSize: [25, 25],
});

const MapProducts = () => {
  const { state, setState } = useApplication();
  const [activePoint, setActivePoint] = useState(null);

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
            onclick={() => {
              setActivePoint(mark);
            }}
          ></Marker>
        );
      })}
      {activePoint && (
        <Popup
          position={[activePoint.coordinates_x, activePoint.coordinates_y]}
          onClose={() => {
            setActivePoint(null);
          }}
        >
          <Link
            onClick={() => {
              localStorage.setItem("brewerId", activePoint.brewer_id);
            }}
            // brewer_id={mark.brewer_id}
            to={{
              pathname: "/Products",
              productdetailProps: {
                productdetail: 3,
              },
            }}
          >
            <h4>{activePoint.trade_name}</h4>
          </Link>
        </Popup>
      )}
    </Map>
  );
};
export default MapProducts;
// to = {{
//   pathname: "/Products",
//     productdetailProps: {
//     productdetail: 5
//   }
// }}
// <Link to="/Products" brewerId={mark.brewer_id}>
