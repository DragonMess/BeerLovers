import React, { useState } from "react";
import styleCart from "../styledComponents/styleCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Row, Col, FormControl } from "react-bootstrap";

const { Styles } = styleCart();

const CartListItem = () => {
  const stock = 5;
  const priceUnit = 9.0;
  const [beerQty, setBeerQty] = useState(1);
  const handleIncreaseQty = (e) => {
    if (beerQty < stock) {
      setBeerQty(beerQty + 1);
    }
  };
  const handleDecreasetQty = (e) => {
    if (beerQty > 0) {
      setBeerQty(beerQty - 1);
    }
  };
  return (
    <Styles>
      <Row className="item-tr">
        <Col className="colProduct" xs={1}>
          <img className="img-item" src="./images/blonde1.png" />
        </Col>
        <Col className="item-name" xs={5}>
          <h6>Samuel Adams Noble Pils</h6>
          <hr className="line" />
          <h7>price: ${priceUnit}</h7>
          <br />
          <h7>stock: {stock}</h7>
        </Col>

        <Col xs={1}>
          <button
            className="btn-plus"
            onClick={handleIncreaseQty}
            alt="btn-plus"
          >
            <FontAwesomeIcon
              className="plusIcon"
              icon={["fas", "plus-square"]}
            />
          </button>
          <button className="btn-plus" onClick={handleDecreasetQty}>
            <FontAwesomeIcon
              className="plusIcon"
              icon={["fas", "minus-square"]}
            />
          </button>
        </Col>
        <Col className="colQty" xs={2}>
          <input className="form-control" type="text" value={beerQty} />
        </Col>
        <Col className="colPrice" xs={2}>
          <h7 className="txtPrice">
            ${(Math.round(priceUnit * beerQty * 100) / 100).toFixed(2)}
          </h7>
        </Col>
      </Row>
      <hr className="line" />
    </Styles>
  );
};
export default CartListItem;
