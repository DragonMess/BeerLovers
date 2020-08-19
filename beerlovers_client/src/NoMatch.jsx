import React from "react";
import useApplication from "./hooks/useApplicationData";
const NoMatch = () => {
  const { state, setState } = useApplication();

  return <div>{/* <h1> Error 404 !</h1> */}</div>;
};
export default NoMatch;
