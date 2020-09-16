import React, { useState } from "react";
import CartListItem from "./CartListItem";
import { Row, Col, Button } from "react-bootstrap";
import styleCart from "../../styledComponents/styleCart";
import CartCheckout from "./CartCheckout";
import AlertDismissible from "../AlertDismissible/AlertDismissible";
import useApplication from "../../hooks/useApplicationData";
const { Styles } = styleCart();

// sendEmail
const Cart = () => {
  const { sendEmail } = useApplication();
  const [show, setShow] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [emailCheckout, setEmailCheckout] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});
  const onHide = () => setModalShow(false);

  const cartItems = JSON.parse(localStorage.getItem("cart"));
  const userEmail = localStorage.getItem("UserEmail");
  const handleChekcout = (e) => {
    e.preventDefault();
    sendEmail(cartItems, userEmail);
    localStorage.removeItem("cart");
    onHide();
    setEmailCheckout(true);
  };

  const cart = cartItems
    ? cartItems.map((item, index) => {
        return (
          <CartListItem
            key={index}
            idProduct={item.idProduct}
            qty={item.qty}
            price={item.price}
            name={item.name}
            type={item.type}
            stock={item.stock}
          />
        );
      })
    : undefined;
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
        {cart}
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
          {localStorage.getItem("cart") ? (
            <Button className="btn-success" onClick={() => setModalShow(true)}>
              Checkout
            </Button>
          ) : (
            <div></div>
          )}
        </section>
        <p></p>
        {emailCheckout ? (
          <AlertDismissible show={show} setShow={setShow}>
            You will receive an email to confirm your order details
          </AlertDismissible>
        ) : (
          <div></div>
        )}
      </article>
      <CartCheckout
        handleChekcout={handleChekcout}
        show={modalShow}
        onHide={onHide}
      />
    </Styles>
  );
};
export default Cart;
