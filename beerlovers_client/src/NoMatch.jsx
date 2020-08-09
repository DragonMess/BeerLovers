import React from "react";
import useApplication from "./hooks/useApplicationData";
import Cart from "./Cart";
const NoMatch = () => {
  const { state, setState } = useApplication();

  return (
    <div>
      {/* <h1> Error 404 !</h1> */}
      <Cart></Cart>
    </div>
  );
};
export default NoMatch;
