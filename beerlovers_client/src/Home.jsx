import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useApplication from "../src/hooks/useApplicationData";

const Styles = styled.div`
  .mainLogo {
    margin-top: 15vh;

    margin-left: auto;
    margin-right: auto;
    // width: 40vh;
    width: 80%;
    height: 40%;
    // height: 40vh;
  }
  .logos {
    width: 100%;
  }
  .col {
    display: flex;
    justify-content: center;
  }
  .beerIcon,
  .storeIcon {
    margin-top: 5vh;
    width: 6vh;
    height: 7vh;
    color: white;
  }
  .bewerMap-div {
    text-align: center;
  }
  .bewerMap-btn {
    margin-top: 5vh;
    text-align: center;
    width: 240px;
    height: 56px;
    background: #ea9215;
    box-shadow: 0px 2px 2px rgba(202, 199, 199, 0.25);
    border-radius: 8px;
    color: black;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
  }
`;
const Home = () => {
  const { isLogIn } = useApplication();
  return (
    <Styles>
      <section className="mainLogo">
        <img className="logos" src="images/Logo-Beer.png" alt="logoBeer" />
      </section>
      <Container>
        <Row>
          <Col className="col">
            <FontAwesomeIcon className="storeIcon" icon="store" />
          </Col>
          <Col className="col">
            <FontAwesomeIcon className="beerIcon" icon="beer" />
          </Col>
        </Row>
      </Container>
      <div className="bewerMap-div">
        <Button className="bewerMap-btn" href="/MapProducts">
          Beer Map
        </Button>
      </div>
    </Styles>
  );
};
export default Home;
