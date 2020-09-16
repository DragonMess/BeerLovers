import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import useApplication from "../../hooks/useApplicationData";
import styled from "styled-components";

const Styles = styled.div`
  .login {
    margin-top: 10px;
    padding: 35px;
    // background: #ea9215;
  }
`;
const Login = (props) => {
  const { signIn, logout, state } = useApplication();
  const [textEmail, setTextEmail] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (textEmail && textPassword) {
      signIn({
        email: textEmail,
        password: textPassword,
      })
        // .then(() => props.history.push("/"))
        .then((validate) => {
          if (validate) {
            // props.setLogged(true);
            props.history.push("/");
          } else {
            setTextEmail("");
            setTextPassword("");
            setError("Sorry those credentials are wrong");
            props.history.push("/Login");
          }
        });
    } else {
      setError("Some fields are empty");
    }
  };

  const handleLogOut = (e) => {
    logout({
      email: textEmail,
      password: textPassword,
    });
    props.history.push("/");
  };

  return (
    <Styles>
      <div className="login">
        <h4>Login</h4>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setTextEmail(e.target.value)}
              value={textEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setTextPassword(e.target.value)}
              value={textPassword}
            />
          </Form.Group>
          <Container className="buttons">
            <Row>
              <Col xs={5}>
                <Button variant="primary" type="submit" onClick={handleLogin}>
                  Log In
                </Button>
              </Col>
              <Col xs={2}></Col>
              <Col xs={5}>
                <Button variant="danger" type="submit" onClick={handleLogOut}>
                  Log Out
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
        <br />
        <br />
        <div>
          <h4 className="message">{error} </h4>
          {state.errMessage === "ok" && (
            <h4 className="message">"Sorry those credentials are wrong" </h4>
          )}
        </div>
      </div>
    </Styles>
  );
};
export default Login;
