import React, { useState } from "react";
import styleCart from "../../styledComponents/styleCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";

const { Styles } = styleCart();

// JSON.parse(localStorage.getItem("cartItem"));
// localStorage.removeItem("cartItem");

const CartListItem = (props) => {
  const { qty, price, name, type, stock } = props;

  const [beerQty, setBeerQty] = useState(qty);
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
  const imageSrc = `./images/${type}1.png`;
  // convert price txt money to number float
  const currency = price;
  currency.replace(/[$,]+/g, "");
  const priceNumber = parseFloat(currency);
  // const itemCart = JSON.parse(localStorage.getItem("itemCart"));

  return (
    <Styles>
      <Row className="item-tr">
        <Col className="colProduct" xs={1}>
          <img className="img-item" src={imageSrc} />
        </Col>
        <Col className="item-name" xs={5}>
          <h6>{name}</h6>
          <hr className="line" />
          <h5>price: {price}</h5>
          <br />
          <h5>stock: {stock}</h5>
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
          <h4>{beerQty}</h4>
        </Col>
        <Col className="colPrice" xs={2}>
          <h5 className="txtPrice">
            {(Math.round(priceNumber * beerQty * 100) / 100).toFixed(2)}$
          </h5>
        </Col>
      </Row>
      <hr className="line" />
    </Styles>
  );
};
export default CartListItem;
