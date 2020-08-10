import React, { useState } from "react";
import useApplication from "./hooks/useApplicationData";
import CartListItem from "./components/CartListItem";
import { Row, Col, Button } from "react-bootstrap";
import styleCart from "./styledComponents/styleCart";
import CartCheckout from "./components/CartCheckout";
const { Styles } = styleCart();

const Cart = () => {
  const [modalShow, setModalShow] = useState(false);
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
          <Col className="colPrice" xs={2}>
            Price
          </Col>
        </Row>
        <hr className="line" />
        <CartListItem></CartListItem>
        <section>
          <Button
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/Products";
            }}
          >
            Continue Shopping
          </Button>

          <Button className="btn-success" onClick={() => setModalShow(true)}>
            Checkout
          </Button>
        </section>
      </article>
      <CartCheckout show={modalShow} onHide={() => setModalShow(false)} />
    </Styles>
  );
};
export default Cart;
