import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useApplication from "./hooks/useApplicationData";
import styled from "styled-components";

const Styles = styled.div`
  .register {
    margin-top: 10px;
    padding: 35px;
    // background: #ea9215;
  }
`;
const Register = (props) => {
  const { register, logout, state } = useApplication();
  const [textEmail, setTextEmail] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [textName, setTextName] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (textEmail && textPassword) {
      register({
        name: textName,
        email: textEmail,
        password: textPassword,
      }).then((validate) => {
        if (validate) {
          // props.setLogged(true);
          props.history.push("/");
        } else {
          setTextName("");
          setTextEmail("");
          setTextPassword("");
          setError("Sorry that email is already used");
          props.history.push("/Register");
        }
      });
    } else {
      setError("Some fields are empty");
    }
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    logout({
      name: textName,
      email: textEmail,
      password: textPassword,
    });
    props.history.push("/");
  };

  return (
    <Styles>
      <div className="register">
        <h4>Register</h4>

        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="name"
              onChange={(e) => setTextName(e.target.value)}
              value={textName}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
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

          <Button variant="primary" type="submit" onClick={handleRegister}>
            Submit
          </Button>
          <br />
          <br />
          <Button variant="danger" type="submit" onClick={handleLogOut}>
            Log Out
          </Button>
        </Form>
        <br />
        <br />
        <div>
          {/* <h4 className="message">{error} </h4> */}
          {state.errMessage === "ok" && <h4 className="message">{error} </h4>}
        </div>
      </div>
    </Styles>
  );
};
export default Register;
