import React, { useState } from "react";
import useVisualMode from "./hooks/useMode";
import ProductsFilter from "./components/ProductsFilter";
import ProductList from "./components/ProductList";
import useApplication from "./hooks/useApplicationData";

const Products = () => {
  const PRODUCTLIST = "PRODUCTLIST";
  const PRODUCT_DESCRIPTION = "PRODUCT_DESCRIPTION";
  const PRODUCT_TYPES = "PRODUCT_TYPES";
  const [filterBeer, setFilterBeer] = useState(null);
  const filterbyType = (type) => {
    setFilterBeer(type);
    transition(PRODUCTLIST);
  };
  console.log(filterBeer);
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
        />
      )}
      {mode === PRODUCT_TYPES && (
        <ProductsFilter
          setFilterBeer={setFilterBeer}
          filterbyType={filterbyType}
        ></ProductsFilter>
      )}
    </div>
  );
};
export default Products;
