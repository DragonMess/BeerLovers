import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Row, Col, FormControl } from "react-bootstrap";
import styleCart from "../styledComponents/styleCart";
const { Styles } = styleCart();

const CartListItem = () => {
  return (
    <Styles>
      {/* <Row className="item-tr">
        <Col>
          <img className="img-item" src="./images/blonde1.png" />{" "}
        </Col>
        <Col className="item-name">Samuel Adams Noble Pils</Col>
        <Col>
          <FontAwesomeIcon className="plusIcon" icon={["fas", "plus-square"]} />
          <FontAwesomeIcon
            className="plusIcon"
            icon={["fas", "minus-square"]}
          />
        </Col>
        <Col>
          <input className="form-control" type="text" value="1" />
        </Col>
        <Col class="text-right">$12.00</Col> */}
      {/* <td class="text-right">
          <button className="btn btn-sm btn-danger">
            <FontAwesomeIcon
              className="trashIcon"
              icon={["fas", "trash-alt"]}
            />
          </button>
        </td> */}
      {/* <hr className="line" /> */}
      {/* </Row> */}

      <Row className="item-tr">
        <Col className="colProduct" xs={2}>
          <img className="img-item" src="./images/blonde1.png" />
        </Col>
        <Col className="item-name" xs={4}>
          Samuel Adams Noble Pils
        </Col>

        <Col xs={1}>
          <FontAwesomeIcon className="plusIcon" icon={["fas", "plus-square"]} />
          <FontAwesomeIcon
            className="plusIcon"
            icon={["fas", "minus-square"]}
          />
        </Col>
        <Col className="colQty" xs={2}>
          <input className="form-control" type="text" value="1" />
        </Col>
        <Col className="colPrice" xs={3}>
          $9.00
        </Col>
      </Row>
      <hr className="line" />
    </Styles>
  );
};
export default CartListItem;
