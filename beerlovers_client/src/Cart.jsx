import React from "react";
import useApplication from "./hooks/useApplicationData";
import CartListItem from "./components/CartListItem";
import { Row, Col } from "react-bootstrap";
import styleCart from "./styledComponents/styleCart";
const { Styles } = styleCart();

const Cart = () => {
  const { state, setState } = useApplication();

  return (
    <Styles>
      <article className="articleCart">
        <Row className="table-header">
          <Col className="colProduct" xs={6}>
            Product
          </Col>
          <Col className="colQty" xs={3}>
            Qty
          </Col>
          <Col className="colPrice" xs={3}>
            Price
          </Col>
        </Row>
        <hr className="line" />
        <CartListItem></CartListItem>
      </article>
    </Styles>
  );
};
export default Cart;
