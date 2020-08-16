import React from "react";
import ProductListItem from "./ProductListItem";
import { Button, Col, Table } from "react-bootstrap";
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
          <tr key={dataProduct.id}>
            <td>{dataProduct.product_name}</td>
            <td>{dataProduct.rate}/5</td>
            <td>{dataProduct.unit_price}</td>
          </tr>
        );
      })
    : undefined;
  return (
    <Styles>
      <h2>My Favourites Beers</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Beer Name</th>
            <th>Rate</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{beers}</tbody>
      </Table>
    </Styles>
  );
};
export default FavouriteList;
