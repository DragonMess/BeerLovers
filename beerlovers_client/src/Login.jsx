import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useApplication from "./hooks/useApplicationData";

const Login = (props) => {
  const { signIn, logout, validate } = useApplication();
  const [textEmail, setTextEmail] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (textEmail && textPassword) {
      signIn({
        email: textEmail,
        password: textPassword,
      });

      if (!validate) {
        props.history.push("/");
      } else {
        setTextEmail("");
        setTextPassword("");
        setError("Sorry those credentials are wrong");
        props.history.push("/Login");
      }
    } else {
      setError("Some fields are empty");
    }
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    logout({
      email: textEmail,
      password: textPassword,
    });
    props.history.push("/");
  };

  return (
    <div>
      <h4>Login</h4>
      <Form>
        <Form.Group controlId="formBasicEmail">
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

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setTextPassword(e.target.value)}
            value={textPassword}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleLogin}>
          Login
        </Button>
        <br />
        <br />
        <Button variant="danger" type="submit" onClick={handleLogOut}>
          Logout
        </Button>
      </Form>
      <br />
      <br />
      <div>
        <h4 className="message">{error} </h4>
      </div>
    </div>
  );
};
export default Login;
