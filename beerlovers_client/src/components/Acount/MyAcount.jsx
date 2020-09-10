import React, { useState } from "react";
import useApplication from "../../hooks/useApplicationData";
import { findBreweryName } from "../../helpers/selectors";
import { Form, Container, Col, Row, Button } from "react-bootstrap";

function MyAcount(props) {
  const { showProducts, showADDProducts } = props;
  const { state, UserUpDateInfo } = useApplication();

  const myId = localStorage.getItem("UserId");
  const myEmail = localStorage.getItem("UserEmail");
  const myName = localStorage.getItem("UserName");
  const brewer = findBreweryName(state, 1);

  const [readOnly, setReadOnly] = useState(true);
  const [textEmail, setTextEmail] = useState(myEmail);
  const [textName, setTextName] = useState(myName);
  const [save, setSave] = useState(false);
  const [textBreweryName, setTextBreweryName] = useState(brewer);
  const [textPassword, setTextPassword] = useState();

  const [error, setError] = useState(null);

  const handleADDProducts = (e) => {
    e.preventDefault();
    showADDProducts();
  };
  const handleShowProducts = (e) => {
    e.preventDefault();
    showProducts();
  };
  // finir la request to server to change de data
  const handleSave = (e) => {
    e.preventDefault();
    if (textEmail && textName && textBreweryName && textPassword) {
      UserUpDateInfo(myId, textName, textEmail, textPassword, textBreweryName);
      // .then((res) => console.log(res));
    } else {
      setError("Some fields are empty");
    }
  };
  // change state of inputs to editable
  const handleEdit = (e) => {
    e.preventDefault();
    setReadOnly(false);
    setSave(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setReadOnly(true);
    setSave(false);
    setTextPassword("");
    setTextName(myName);
    setTextEmail(myEmail);
    setTextBreweryName(textBreweryName);
  };
  return (
    <div>
      <Container>
        <Row>
          <h3>General Account Settings</h3>
        </Row>
        <Col xs={12}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                name="name"
                onChange={(e) => setTextName(e.target.value)}
                value={textName}
                readOnly={readOnly}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setTextEmail(e.target.value)}
                value={textEmail}
                readOnly={readOnly}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter a new password"
                name="password"
                onChange={(e) => setTextPassword(e.target.value)}
                value={textPassword}
                readOnly={readOnly}
              />
            </Form.Group>

            <Form.Group controlId="formBreweryNamme">
              <Form.Label>Brewery Name</Form.Label>
              <Form.Control
                type="breweryName"
                placeholder="Enter a Brewery Name"
                onChange={(e) => setTextBreweryName(e.target.value)}
                value={textBreweryName}
                readOnly={readOnly}
              />
            </Form.Group>
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
          </Form>
          <br />
          <br />
          {error !== null ? (
            <div className="alert alert-danger">
              <h4 className="message ">{error} </h4>
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <Button
              variant="warning"
              type="submit"
              onClick={handleShowProducts}
            >
              Edit products
            </Button>
            <br />
            <br />
            <Button variant="primary" type="submit" onClick={handleADDProducts}>
              Add Product
            </Button>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default MyAcount;
