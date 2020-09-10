import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import useApplication from "./hooks/useApplicationData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  .mainLogo {
    margin-top: 10vh;

    margin-left: auto;
    margin-right: auto;
    // width: 40vh;
    width: 100%;
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
    height: 45px;
    background: #303841;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 2px 2px rgba(202, 199, 199, 0.25);
    border-radius: 8px;
    color: #a8a8a8;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 35px;
  }
`;
const Home = (props) => {
  const { logout } = useApplication();
  const handleLogOut = (e) => {
    logout({
      email: "",
      password: "",
    });
    // props.history.push("/");
  };

  const name = localStorage.getItem("UserName");
  return (
    <Styles>
      <section className="mainLogo">
        {/* {name? <h3>Logged as {name}</h3> : <div></div>} */}
        <img className="logos" src="images/Logo-Beer.png" alt="logoBeer" />
      </section>
      <Container>
        {/* <Row>
          <Col className="col">
            <FontAwesomeIcon className="storeIcon" icon="store" />
          </Col>
          <Col className="col">
            <FontAwesomeIcon className="beerIcon" icon="beer" />
          </Col>
        </Row> */}
        <p></p>
        {!name ? (
          <div className="bewerMap-div">
            <Button className="bewerMap-btn" href="/Login">
              Log In
            </Button>{" "}
            <p></p>{" "}
            <Button className="bewerMap-btn" href="/Register">
              Register
            </Button>
          </div>
        ) : (
          <Container className="text-center">
            <h5>Welcome BeerLover:</h5>
            <h4>{name}</h4>
            <Button
              className="bewerMap-btn"
              onClick={handleLogOut}
              href="/Login"
            >
              Log Out
            </Button>
          </Container>
        )}
      </Container>
    </Styles>
  );
};
export default Home;
