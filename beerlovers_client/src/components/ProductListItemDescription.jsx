import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Row, Col, FormControl } from "react-bootstrap";
import styleComponents from "../styledComponents/styleComponent";
const { Styles } = styleComponents();

const ProductListItemDescription = (props) => {
  console.log(props.children[1]);
  // const { props.children[1] } = props;
  return (
    <Styles>
      <section className="beerDescriptionSection">
        <div className="HeaderProductDescription">
          <img
            className="beerImage"
            src="./images/blonde1.png"
            alt="beerType"
          ></img>
          <div>
            <FontAwesomeIcon className="heartIcon" icon={["fas", "heart"]} />
            <FontAwesomeIcon className="heartIcon" icon={["far", "hearts"]} />
            <h3 className="nameProductDescription">
              {props.children[1].product_name}
            </h3>
            <div className="nameProduct">
              <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />

              <h4 className="starProduct">{props.children[1].rate}/ 5</h4>
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
            <div className="compositionValue">{props.children[1].IBU}</div>
          </div>
          <div className="productComposition">
            <div className="typeComposition">
              <b>EBC</b>
            </div>
            <div className="compositionValue">{props.children[1].EBC}</div>
          </div>
          <hr className="line" />
          <div className="productComposition">
            <div className="typeComposition">
              <b>Price</b>
            </div>
            <div className="compositionValue">
              ${props.children[1].unit_price}
            </div>
          </div>
          <hr className="line" />
        </article>
      </section>
      <section className="submitContainer">
        <div>Quantity</div>
        <Row>
          <Col xs={4}>
            <FormControl
              className="input-qty"
              placeholder="Enter Qty"
              aria-label="Qty"
              aria-describedby="basic-addon1"
            ></FormControl>
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
          <Col xs={6}>
            <Button className="cart-btn">ADD TO CART</Button>{" "}
          </Col>
        </Row>
        <hr className="line" />
        <Row>
          <Col xs={3}>
            <div className="rate-txt">Rate Beer</div>
          </Col>

          <Col xs={2}>
            <FormControl
              className="input-rate"
              placeholder="Rate"
              aria-label="Qty"
              aria-describedby="basic-addon1"
            ></FormControl>
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
            <Button className="rate-btn">Rate</Button>{" "}
          </Col>
        </Row>
      </section>
    </Styles>
  );
};
export default ProductListItemDescription;
