import React from "react";
import ProductListItem from "./ProductListItem";
import styleComponents from "../../styledComponents/styleComponent";
import {
  filterBeer,
  listFavouriteProductsId,
  favoritesUser,
} from "../../helpers/selectors";
const { Styles } = styleComponents();

const ProductList = (props) => {
  const {
    products,
    beerType,
    findIdBeer,
    favouriteADD,
    favouriteDelete,
  } = props;
  const userId = localStorage.getItem("UserId");
  const brewerId = localStorage.getItem("brewerId");
  const productByType = filterBeer(products, beerType, brewerId);
  // find if is a favourite beer by user
  const favouriteList = listFavouriteProductsId(products, userId);
  console.log(products.favourites);
  const beers = productByType
    ? productByType.map((dataProduct) => {
        const IsFavouriteByUser = favoritesUser(favouriteList, dataProduct.id)
          ? true
          : false;
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
              IsFavouriteByUser={IsFavouriteByUser}
              userId={userId}
              favouriteADD={favouriteADD}
              favouriteDelete={favouriteDelete}
            />
          </li>
        );
      })
    : undefined;
  return (
    <Styles>
      <div>
        <h2 className="beerType"> {beerType} Beer</h2>
      </div>
      <section className="beerList">{beers}</section>
    </Styles>
  );
};
export default ProductList;
