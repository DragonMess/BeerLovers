import React from "react";
import MyProductListItem from "./MyProcuctListItem";
import { Container } from "react-bootstrap";
import useApplication from "../../hooks/useApplicationData";
import { filterProductsByUser } from "../../helpers/selectors";
export default function MyProductsList(props) {
  const { state, setState } = useApplication();
  const { showProductDescription } = props;
  const idUser = localStorage.getItem("UserId");

  const myProduct = filterProductsByUser(state, idUser);
  const productItem = myProduct
    ? myProduct.map((item) => {
        return (
          <MyProductListItem
            key={item.id}
            name={item.product_name}
            product={item}
            showProductDescription={showProductDescription}
          />
        );
      })
    : undefined;
  return (
    <div>
      <Container>
        <h3>My Products</h3>
        {/* <MyProductListItem
          showProductDescription={showProductDescription}
        ></MyProductListItem> */}
        {productItem}
      </Container>
    </div>
  );
}
