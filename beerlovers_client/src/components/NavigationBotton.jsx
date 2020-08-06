import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 51px;
    width: 100%;
    background-color: #b0afaf;
    // color: white;
    text-align: center;
  }
  .footer-art {
    // color: white;
    // text-align: center;
    margin-left: 3vh;
    margin-right: 3vh;
    display: flex;
    flex-direction: row;
    // justify-content: center;
    justify-content: space-between;
    align-items: center;
    // align-content:space-between;
  }
  .iconNavBotton {
    color: black;
    margin-top: 8px;
    font-size: 2em;
  }
`;

const Navigation = () => {
  return (
    <Styles>
      <footer>
        <article className="footer-art">
          <div>
            <a href="/">
              <FontAwesomeIcon href="/" className="iconNavBotton" icon="home" />
            </a>
          </div>
          <div>
            <a href="/Products">
              <FontAwesomeIcon className="iconNavBotton" icon="search" />
            </a>
          </div>
          <div>
            <a href="/MapProducts">
              <FontAwesomeIcon className="iconNavBotton" icon="compass" />
            </a>
          </div>
          <div>
            <a href="/Favourites">
              <FontAwesomeIcon className="iconNavBotton" icon="heart" />
            </a>
          </div>
        </article>
      </footer>
    </Styles>
  );
};

export default Navigation;
