import React from "react";
import ProductListItemDescription from "./components/ProductListItemDescription";
import useApplication from "./hooks/useApplicationData";

const NoMatch = () => {
  const { state, setState } = useApplication();

  return (
    <div>
      {/* <h1> Error 404 !</h1> */}
      <ProductListItemDescription />
    </div>
  );
};
export default NoMatch;
