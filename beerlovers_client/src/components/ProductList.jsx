import React from "react";
import { useState } from "react";
import ProductListItem from "./ProductListItem";
import styleComponents from "../styledComponents/styleComponent";
import { filterBeer } from "../helpers/selectors";
const { Styles } = styleComponents();

const ProductList = (props) => {
  const { products, beerType, findIdBeer } = props;

  const productByType = filterBeer(products, beerType);

  const beers = productByType
    ? productByType.map((dataProduct) => {
        return (
          <li key={dataProduct.id}>
            <ProductListItem
              name={dataProduct.product_name}
              price={dataProduct.unit_price}
              rate={dataProduct.rate}
              id={dataProduct.id}
              dataProduct={dataProduct}
              findIdBeer={findIdBeer}
            />
          </li>
        );
      })
    : undefined;
  return (
    <Styles>
      <div>
        <h2 className="beerType"> {beerType}</h2>
      </div>
      <section className="beerList">{beers}</section>
    </Styles>
  );
};
export default ProductList;
