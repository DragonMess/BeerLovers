import React from "react";
import { Button, Row, Col, Modal, Container } from "react-bootstrap";
const CartCheckout = (props) => {
  const { handleChekcout, onHide } = props;

  // const handleChekcout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("cart");
  //   onHide();
  //   // props.history.push("/");
  //   // return <Redirect to="/Login" />;
  // };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <h4>Billing Address</h4>
          <label htmlFor="fname">Full Name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="John M. Doe"
          />
          <br />
          <label htmlFor="adr">Address:</label>
          <br />
          <input
            type="text"
            id="adr"
            name="address"
            placeholder="542 W. 15th Street"
          />
          <br />
          <label htmlFor="city">
            <i className="fa fa-institution"></i> City:
          </label>
          <br />
          <input type="text" id="city" name="city" placeholder="Montreal" />

          <Row>
            <Col xs={6}>
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" placeholder="Qc" />
            </Col>
            <Col xs={6}>
              <label htmlFor="zip">Zip</label>
              <input type="text" id="zip" name="zip" placeholder="XXX-XXX" />
            </Col>
          </Row>
          <h4>Payment</h4>
          <label htmlFor="cname">Name on Card:</label>
          <br />
          <input
            type="text"
            id="cname"
            name="cardname"
            placeholder="John More Doe"
          />
          <br />
          <label htmlFor="ccnum">Credit card number:</label>
          <br />
          <input
            type="text"
            id="ccnum"
            name="cardnumber"
            placeholder="1111-2222-3333-4444"
          />
          <br />
          <Row>
            <Col xs={6}>
              <label htmlFor="expmonth">Exp Month:</label>
              <br />
              <input
                type="text"
                id="expmonth"
                name="expmonth"
                placeholder="22/12"
              />
            </Col>

            <Col xs={6}>
              <label htmlFor="cvv">CVV</label> <br />
              <input type="text" id="cvv" name="cvv" placeholder="352" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleChekcout}>Confirm to checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartCheckout;
