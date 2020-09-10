import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .mainContainer {
    padding: 0;
    margin: 0;
    background-color: #303841;
    min-height: 500vh;
    font-family: "Montserrat", sans-serif;
    color: white;
  }
`;
const Layout = (props) => {


  return (
    <Styles>
      <Container className="mainContainer">{props.children}</Container>
    </Styles>
  );
};
export default Layout;
