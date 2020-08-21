import React, { useState } from "react";
import useVisualMode from "../../hooks/useMode";
import MyAcount from "./MyAcount";
import MyProductsList from "./MyProductsList";
import MyProductListItemDescription from "./MyProductListItemDescription";

import useApplication from "../../hooks/useApplicationData";

const Acount = () => {
  const MYPRODUCTLIST = "MYPRODUCTLIST";
  const MYPRODUCT_DESCRIPTION = "MYPRODUCT_DESCRIPTION";
  const MYACOUNT = "MYACOUNT";
  const { state, setState } = useApplication();
  const [product, setProduct] = useState(null);
  const showProducts = () => {
    transition(MYPRODUCTLIST);
  };
  const showProductDescription = (productSelected) => {
    setProduct(productSelected);
    transition(MYPRODUCT_DESCRIPTION);
  };
  const showSettings = () => {
    transition(MYACOUNT);
  };
  const comeBack = (acount) => {
    transition(acount);
  };
  const { mode, transition, back } = useVisualMode(
    showSettings ? MYACOUNT : MYPRODUCTLIST
  );

  return (
    <div>
      {mode === MYACOUNT && <MyAcount showProducts={showProducts} />}
      {mode === MYPRODUCTLIST && (
        <MyProductsList showProductDescription={showProductDescription} />
      )}
      {mode === MYPRODUCT_DESCRIPTION && (
        <MyProductListItemDescription product={product} comeBack={comeBack} />
      )}
    </div>
  );
};
export default Acount;
