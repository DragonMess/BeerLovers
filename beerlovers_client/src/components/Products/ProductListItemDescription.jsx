import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Row, Col, FormControl, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .beerDescriptionSection {
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 72vh;
    background: #38444d;
    box-shadow: 0px 2px 2px rgba(202, 199, 199, 0.25);
    border-radius: 8px;
  }

  .starProduct {
    text-align: left;
    margin-top: 0px;
    margin-botton: 8px;
    margin-left: 16px;
    width: 285.25px;
    height: 0px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
  }
  .description {
    text-align: left;
  }
  p {
    margin-right: 20px;
  }
  h3 {
    margin-left: 10px;
  }

  .beerImage {
    margin-top: 30px;
    margin-left: 13px;
    width: 60px;
    height: 145px;
  }
  .HeaderProductDescription {
    display: flex;
    flex-direction: row;
  }
  .nameProductDescription {
    width: 182px;
    height: 10px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: ;
  }
  .HeaderProductDescription div {
    // margin-left: 31px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
  }

  .detail_article {
    padding: 6px;
    width: 90%;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    background-color: #5a656d;
    border-radius: 6px;
  }
  .elementDescription {
    margin: 8px;
  }
  .productComposition {
    display: flex;
    flex-direction: row;
    margin: 8px;
  }
  .compositionValue {
    text-align: right;
    width: 350px;
  }

  .submitContainer {
    height: 15vh;
    padding: 6px;
    width: 90%;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
  }
  .cart-btn {
    width: 130px;
    height: 30px;
    background: #ea9215;
    box-shadow: 0px 2px 2px rgba(202, 199, 199, 0.25);
    border-radius: 8px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;

    text-align: center;

    color: #eeeeee;
  }
  .input-qty {
    width: 100px;
    height: 30px;
    background: #5a656d;
    border-radius: 6px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: Bold;
    font-size: 14px;
    line-height: 27px;
    text-align: center;
    color: white;
  }
  .btnsQty {
    margin-left: 25px;
  }
  .rate-btn {
    width: 130px;
    height: 30px;

    background: #4f8073;
    border-radius: 8px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
  }
  .input-rate {
    width: 50px;
    height: 30px;
    color: white;
    background: #7c858b;
    border-radius: 6px;
  }
  .rate-txt {
    padding: 0;
    margin-top: 8px;
    width: 70px;
    height: 53px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #ffffff;
  }
`;

// const { Styles } = styleComponents();

const ProductListItemDescription = (props) => {
  const stock = props.children[1].stock_quantity;
  const imageSrc = `./images/${props.children[1].product_type}1.png`;
  const [beerQty, setBeerQty] = useState(0);

  // functions to increse or drecrease beer qty to add to the cart
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
  // object to add in localstorage
  const itemCart = {
    idProduct: props.children[1].id,
    qty: beerQty,
    price: props.children[1].unit_price,
    name: props.children[1].product_name,
    type: props.children[1].product_type,
    stock: props.children[1].stock_quantity,
  };

  const description = (type) => {
    let beerDescription;
    if (type === "Blonde") {
      beerDescription =
        "Malty and dry, the blonde exhibits an alluring fruitiness";
    }
    if (type === "IPA") {
      beerDescription = "Bold citrus flavours and a resinous bitterness";
    }
    if (type === "Amber") {
      beerDescription = "A blend of special malts bestows the amber";
    }
    if (type === "White") {
      beerDescription = "Delicate aromas of citrus and flavours of wheat";
    }
    if (type === "Brown") {
      beerDescription =
        "Full-bodied and malty, this beer presents aromas of caramel";
    }
    if (type === "Alambra") {
      beerDescription =
        "A Spanish lager with a profile of toasted and crunchy cereals";
    }
    if (type === "Siracoli") {
      beerDescription =
        "Italian redhead of thirst with caramelized notes, dry finish ";
    }
    return beerDescription;
  };
  console.log(description(props.children[1].product_type));
  // add the items in an array of object in localstorage
  // to have acces in cart component
  const handleAddToCart = (e) => {
    // verify if array of itmes exist
    if (localStorage.getItem("cart") && itemCart.qty > 0) {
      // convert to array the txt from localstorage
      const cartArray = JSON.parse(localStorage.getItem("cart"));
      // convert to txt the new array to localstorage
      const cart = JSON.stringify([...cartArray, itemCart]);
      localStorage.setItem("cart", cart);
      setBeerQty(0);
    }
    if (!localStorage.getItem("cart") && itemCart.qty > 0) {
      localStorage.setItem(`cart`, JSON.stringify([]));
      const cartArray = JSON.parse(localStorage.getItem("cart"));
      const cart = JSON.stringify([...cartArray, itemCart]);
      localStorage.setItem("cart", cart);
      setBeerQty(0);
    }
  };
  return (
    <Styles>
      <section className="beerDescriptionSection">
        <div className="HeaderProductDescription">
          <img className="beerImage" src={imageSrc} alt="beerType"></img>
          <div>
            {/* <FontAwesomeIcon className="heartIcon" icon={["fas", "heart"]} />
            <FontAwesomeIcon className="heartIcon" icon={["far", "hearts"]} /> */}
            <h3 className="nameProductDescription">
              {props.children[1].product_name}
            </h3>
            <div className="nameProduct">
              <p className="description">
                {description(props.children[1].product_type)}
              </p>
              <Row>
                <h4 className="starProduct">
                  <FontAwesomeIcon
                    className="starIcon"
                    icon={["fas", "star"]}
                  />
                  {props.children[1].rate}/ 5
                </h4>
              </Row>
            </div>
          </div>
        </div>
        <article className="detail_article">
          <div className="elementDescription">
            <div className="typeComposition">
              <b>MALT</b>
            </div>
            <div className="valueElement"> Pilsen</div>
          </div>
          <hr className="line" />
          <div className="elementDescription">
            <div className="typeComposition">
              <b>HOPS</b>
            </div>
            <div className="valueElement"> Saaz, Nugget, Bramling cross</div>
          </div>
          <hr className="line" />
          <div className="productComposition">
            <div className="typeComposition">
              <b>Alcohol</b>
            </div>
            <div className="compositionValue">{props.children[1].alcohol}%</div>
          </div>
          <hr className="line" />
          <div className="productComposition">
            <div className="typeComposition">
              <b>IBU</b>
            </div>
            <div className="compositionValue">{props.children[1].ibu}</div>
          </div>
          <div className="productComposition">
            <div className="typeComposition">
              <b>EBC</b>
            </div>
            <div className="compositionValue">{props.children[1].ebc}</div>
          </div>
          <hr className="line" />
          <div className="productComposition">
            <div className="typeComposition">
              <b>Price</b>
            </div>
            <div className="compositionValue">
              {props.children[1].unit_price}
            </div>
          </div>
          <hr className="line" />
        </article>
      </section>
      <section className="submitContainer">
        <div>Quantity</div>
        <Row>
          <Col xs={4}>
            <h2 className="input-qty">{beerQty}</h2>
          </Col>
          <Col xs={2}>
            <Row className="btnsQty">
              <FontAwesomeIcon
                className="btnsQty"
                onClick={handleIncreaseQty}
                className="plusIcon"
                icon={["fas", "plus-square"]}
              />
              <FontAwesomeIcon
                className="btnsQty"
                onClick={handleDecreasetQty}
                className="minusIcon"
                icon={["fas", "minus-square"]}
              />
            </Row>
          </Col>
          <Col xs={6}>
            <Button className="cart-btn" onClick={handleAddToCart}>
              ADD TO CART
            </Button>{" "}
          </Col>
        </Row>
        {/* <hr className="line" /> */}
        {/* <Row>
            <Col xs={3}>
              <div className="rate-txt">Rate Beer</div>
            </Col>

            <Col xs={2}>
              <input
                type="text"
                className="input-rate"
                placeholder="Rate"
                aria-label="Qty"
                aria-describedby="basic-addon1"
              ></input>
            </Col>
            <Col xs={2}>
              <Row>
                <FontAwesomeIcon
                  className="plusIcon"
                  icon={["fas", "plus-square"]}
                />
              </Row>
              <Row>
                <FontAwesomeIcon
                  className="minusIcon"
                  icon={["fas", "minus-square"]}
                />
              </Row>
            </Col>
            <Col xs={3}>
              <Button className="rate-btn">Rate</Button>
            </Col>
          </Row> */}
      </section>
    </Styles>
  );
};
export default ProductListItemDescription;

// const userID = localStorage.getItem("UserId");
// localStorage.setItem("UserId", res.data.id);
// localStorage.removeItem("UserId");
