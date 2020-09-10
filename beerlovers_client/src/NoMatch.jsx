import React from "react";
import useApplication from "./hooks/useApplicationData";

const NoMatch = () => {
  const { state, setState } = useApplication();

  const imageSrc = `./images/FrontEnd/React.png`;
  return (
    <div>
      <h1> Front-End !</h1>
      <img
        className="beerImage"
        src="./images/FrontEnd/React.png"
        alt="beerType"
      ></img>
      <img
        className="beerImage"
        src="./images/FrontEnd/boostrap.png"
        alt="beerType"
      ></img>
    </div>
  );
};
export default NoMatch;
