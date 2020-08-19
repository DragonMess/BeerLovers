import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import useApplication from "../hooks/useApplicationData";
import { Redirect } from "react-router-dom";
const Styles = styled.div`
  .myNav {
    margin: 0;
    background: #ea9215;
  }
  .navbar-brand {
    width: 175px;
    height: 30px;
    width: 170px;
    height: 38px;
    font-family: Metal Mania;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 37px;
    color: white;
  }
  .iconCart {
    color: white;black;
    background:
  }
`;

const Navigation = (props) => {
  const { logout } = useApplication();
  const handleLogOut = (e) => {
    e.preventDefault();
    logout();
    localStorage.removeItem("cart");
    // props.history.push("/Login");
    console.log(props);
    // return <Redirect to="/Login" />;
  };
  return (
    <Styles>
      <Navbar className="myNav" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">BEERLOVERS</Navbar.Brand>
        <Nav.Link className="iconCart" href="/Cart">
          <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
        </Nav.Link>
        <Nav.Link className="iconCart" href="/">
          <FontAwesomeIcon
            onClick={handleLogOut}
            icon={["fas", "sign-out-alt"]}
          />
        </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navLink" href="/MapProducts">
              Map
            </Nav.Link>
            <Nav.Link className="navLink" href="/Products">
              Beers
            </Nav.Link>
            <Nav.Link className="navLink" href="/Breweries">
              Breweries
            </Nav.Link>
            <Nav.Link className="navLink" href="/Favourites">
              Favourites
            </Nav.Link>
            <Nav.Link className="navLink" href="/Cart">
              Cart
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="navLink" href="/Login">
              Login
            </Nav.Link>
            <Nav.Link className="navLink" href="/Register">
              Register
            </Nav.Link>
            <Nav.Link className="navLink" href="/Acount">
              Acount
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default Navigation;
