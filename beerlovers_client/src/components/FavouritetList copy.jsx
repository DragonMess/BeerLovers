import React from "react";
import ProductListItem from "./ProductListItem";
import styleComponents from "../styledComponents/styleComponent";
import { filterFavouriteBeers } from "../helpers/selectors";
import useApplication from "../hooks/useApplicationData";
const { Styles } = styleComponents();

const FavouriteList = (props) => {
  console.log(props);
  const { state, setState } = useApplication();
  console.log(state);
  const { findIdBeer } = props;
  const UserId = localStorage.getItem("UserId");
  console.log(UserId);
  const productByType = filterFavouriteBeers(state, UserId);
  console.log(productByType);
  const beers = productByType
    ? productByType.map((dataProduct) => {
        return (
          <li key={dataProduct.id}>
            <ProductListItem
              name={dataProduct.product_name}
              price={dataProduct.unit_price}
              rate={dataProduct.rate}
              id={dataProduct.id}
              type={dataProduct.product_type}
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
        <h2 className="">Your Favourites Beers</h2>
      </div>
      <section className="beerList">{beers}</section>
    </Styles>
  );
};
export default FavouriteList;
