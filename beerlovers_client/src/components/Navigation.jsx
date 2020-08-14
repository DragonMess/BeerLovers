import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "styled-components";

import { Redirect } from "react-router-dom";
const Styles = styled.div`
  .myNav {
    margin: 0;
    background: #ea9215;
  }
  .navbar-brand {
    width: 175px;
    height: 30px;
    width: 270px;
    height: 38px;
    font-family: Metal Mania;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 37px;
    color: white;
  }
`;

const Navigation = (props) => {
  return (
    <Styles>
      <Navbar className="myNav" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">BEERLOVERS</Navbar.Brand>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default Navigation;
