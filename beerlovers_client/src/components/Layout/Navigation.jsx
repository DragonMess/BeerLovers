import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import useApplication from "../../hooks/useApplicationData";

const Styles = styled.div`
  .myNav {
    margin: 0;
    background: #ea9215;
    // position:fixed;
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
  const { logout, state } = useApplication();
  const myId = localStorage.getItem("UserId");
  const handleLogOut = (e) => {
    // e.preventDefault();
    logout();
    // setShow(true);
    localStorage.removeItem("cart");
  };
  return (
    <Styles>
      <Navbar className="myNav" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">BEERLOVERS</Navbar.Brand>
        <Nav.Link className="iconCart" href="/Cart">
          <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
        </Nav.Link>
        {state.user_id ? (
          <Nav.Link className="iconCart" href="/Cart">
            <FontAwesomeIcon
              onClick={handleLogOut}
              icon={["fas", "sign-out-alt"]}
            />
          </Nav.Link>
        ) : (
          <Nav.Link />
        )}
        {/* <Nav.Link className="iconCart" href="/Login" onClick={handleLogOut}>
          <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
        </Nav.Link> */}

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navLink" href="/MapProducts">
              Map
            </Nav.Link>
            <Nav.Link className="navLink" href="/Products">
              Beers
            </Nav.Link>
            {/* <Nav.Link className="navLink" href="/Breweries">
              Breweries
            </Nav.Link> */}
            <Nav.Link className="navLink" href="/Favourites">
              Favourites
            </Nav.Link>
            <Nav.Link className="navLink" href="/Cart">
              Cart
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="navLink" href="/Login">
              Log In
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
