import React, { useState } from "react";
import { Container, Col, Row, Table, Button } from "react-bootstrap";
import useApplication from "../../hooks/useApplicationData";

export default function MyProductListItemDescription(props) {
  const { productUpDate, productDelete } = useApplication();
  const { product, comeBack } = props;
  const myId = localStorage.getItem("UserId");
  const [readOnly, setReadOnly] = useState(true);
  const [productName, setProductName] = useState(product.product_name);
  const [productType, setProductType] = useState(product.product_type);
  const [productAlcohol, setProductAlcohol] = useState(product.alcohol);
  const [productIBU, setProductIBU] = useState(product.ibu);
  const [productEBC, setProductEBC] = useState(product.ebc);
  const [productPrice, setProductPrice] = useState(product.unit_price);
  const [productStock, setProductStock] = useState(product.stock_quantity);
  const [error, setError] = useState(null);
  const [save, setSave] = useState(false);
  const MYACOUNT = "MYACOUNT";
  const product_rate = 2;
  const productBrewerId = myId;
  const handleEdit = (e) => {
    e.preventDefault();
    setReadOnly(false);
    setSave(true);
  };

  const handleDelete = (e) => {
    // e.preventDefault();
    productDelete(product.id);
    comeBack(MYACOUNT);
  };
  const handleSave = (e) => {
    if (
      productAlcohol &&
      productBrewerId &&
      productEBC &&
      productIBU &&
      productType &&
      productName &&
      productStock &&
      productPrice
    ) {
      productUpDate(
        productAlcohol,
        productBrewerId,
        productEBC,
        productIBU,
        product.id,
        productType,
        productName,
        productType,
        productStock,
        product_rate,
        productPrice
      );
    } else {
      setError("Some fields are empty");
    }
    comeBack(MYACOUNT);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setReadOnly(true);
    setSave(false);
    setProductName(productName);
    setProductType(productType);
    setProductAlcohol(productAlcohol);
    setProductIBU(productIBU);
    setProductEBC(productEBC);
    setProductPrice(productPrice);
    setProductStock(productStock);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>
                    Name:
                    <input
                      className="form-control input-sm bg-dark text-white"
                      type="text"
                      onChange={(e) => setProductName(e.target.value)}
                      value={productName}
                      readOnly={readOnly}
                    />
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>
                    Type:
                    <input
                      className="form-control input-sm bg-dark text-white"
                      type="text"
                      onChange={(e) => setProductType(e.target.value)}
                      value={productType}
                      readOnly={readOnly}
                    />
                  </th>
                </tr>
              </thead>
            </Table>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="form-control input-sm bg-dark text-white"
                      type="text"
                      onChange={(e) => setProductPrice(e.target.value)}
                      value={productPrice}
                      readOnly={readOnly}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control input-sm bg-dark text-white "
                      type="text"
                      onChange={(e) => setProductStock(e.target.value)}
                      value={productStock}
                      readOnly={readOnly}
                    />
                  </td>
                </tr>
              </tbody>
              {/*  */}
              <thead>
                <tr>
                  <th>Alcohol</th>
                  <th>IBU</th>
                  <th>EBC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="form-control input-sm bg-dark text-white"
                      type="text"
                      onChange={(e) => setProductAlcohol(e.target.value)}
                      value={productAlcohol}
                      readOnly={readOnly}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control input-sm bg-dark text-white"
                      type="text"
                      onChange={(e) => setProductIBU(e.target.value)}
                      value={productIBU}
                      readOnly={readOnly}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control input-sm bg-dark text-white"
                      type="text"
                      onChange={(e) => setProductEBC(e.target.value)}
                      value={productEBC}
                      readOnly={readOnly}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Row>
              <Col>
                {!save ? (
                  <Button variant="primary" type="submit" onClick={handleEdit}>
                    Edit
                  </Button>
                ) : (
                  <Button variant="success" type="submit" onClick={handleSave}>
                    Save
                  </Button>
                )}
              </Col>
              <Col></Col>
              <Col>
                <Button variant="danger" type="submit" onClick={handleCancel}>
                  Cancel
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="bg-danger text-dark" onClick={handleDelete}>
                  Delete
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
