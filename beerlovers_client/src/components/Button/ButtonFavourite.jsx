import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Styles = styled.div`
  .btn-favourite {
    background: 0;
    margin:0;
    border: none;
    cursor:pointer;
    padding:0px;
    line-height:10px;
    font-size: 14px;
    overflow: hidden;
    width: 25px;
    height: 24px;
    text-align:center
  }

.txt-heartIcon
{
  margin: 0;
  padding: 0;
  border: none;
  font: inherit;
  line-height: normal;
    // margin-left: auto;
    // margin-right: auto;
    // vertical-align:middle;
    // text-align: center;
}
  }
`;
export default function ButtonFavourite(props) {

  const { isFavourite, onClick } = props;

  return (
    <Styles>
      <button className="btn-favourite" onClick={onClick}>
        <span>
          {isFavourite? (
            <FontAwesomeIcon
              className="txt-heartIcon"
              icon={["fas", "heart"]}
              color="red"
            />
          ) : (
            <FontAwesomeIcon
              className="txt-heartIcon"
              icon={["far", "hearts"]}
              color="white"
            />
          )}
        </span>
      </button>
    </Styles>
  );
}
