import React, { useState } from "react";
import useVisualMode from "../../hooks/useMode";
import ProductsFilter from "./ProductsFilter";
import ProductList from "./ProductList";
import ProductListItemDescription from "./ProductListItemDescription";
import FavouriteList from "../FavouritetList";

import useApplication from "../../hooks/useApplicationData";

const Products = (props) => {
  const PRODUCTLIST = "PRODUCTLIST";
  const PRODUCT_DESCRIPTION = "PRODUCT_DESCRIPTION";
  const PRODUCT_TYPES = "PRODUCT_TYPES";
  const FAVOURITELIST = "FAVOURITELIST";
  const [filterBeer, setFilterBeer] = useState(null);
  const [beer, setBeer] = useState(null);

  const filterbyType = (type) => {
    setFilterBeer(type);
    transition(PRODUCTLIST);
  };
  const findIdBeer = (beerDescription) => {
    setBeer(beerDescription);
    transition(PRODUCT_DESCRIPTION);
  };
  const { state, setState } = useApplication();

  const { mode, transition, back } = useVisualMode(
    !filterBeer ? PRODUCT_TYPES : PRODUCTLIST
  );
  return (
    <div>
      {mode === PRODUCTLIST && (
        <ProductList
          products={state}
          setState={setState}
          beerType={filterBeer}
          findIdBeer={findIdBeer}
        />
      )}
      {mode === PRODUCT_TYPES && (
        <ProductsFilter
          setFilterBeer={setFilterBeer}
          filterbyType={filterbyType}
        ></ProductsFilter>
      )}
      {mode === PRODUCT_DESCRIPTION && (
        <ProductListItemDescription>beer={beer}</ProductListItemDescription>
      )}
      {mode === FAVOURITELIST && <FavouriteList findIdBeer={findIdBeer} />}
    </div>
  );
};
export default Products;
