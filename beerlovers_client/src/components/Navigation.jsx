import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    margin: 0;
    // padding: 0;
    width: 100%;
    height: 51px;

    background: #ea9215;
    opacity: 0.8;
  }
  .navbar-nav .nav-link {
    color: #eeeeee;

    &:hover {
      color: black;
    }
    font-family: "Montserrat", sans-serif;
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
    // text-shadow: 1px 1px white;
    // text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    // shadow: white;
  }
`;

const Navigation = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">BEERLOVERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/MapProducts">Map</Nav.Link>
            <Nav.Link href="/Products">Beers</Nav.Link>
            <Nav.Link href="/Breweries">Breweries</Nav.Link>
            <Nav.Link href="/Favourites">Favourites</Nav.Link>
            <Nav.Link href="/Cart">Cart</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default Navigation;
