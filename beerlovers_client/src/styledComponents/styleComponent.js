import styled from "styled-components";

export default function StyleComponenet() {
  const Styles = styled.div`
    // ======== ProductsFilter ======
    .traditionalBeers {
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      background-color: #b0afaf;
      width: 320px;
      height: 320px;
      display: flex;
      flex-direction: column;
      color: #5a656d;
      border-radius: 8px;
    }
    .Beers-btn {
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      width: 250px;
      height: 40px;
      border: none;
      background: #ede0cf;
      box-shadow: 0px 2px 2px rgba(202, 199, 199, 0.25);
      border-radius: 8px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #5a656d;
    }
    .specialBeers {
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      background-color: #5a656d;
      width: 320px;
      height: 164px;
      display: flex;
      flex-direction: column;
      color: #5a656d;
      border-radius: 8px;
    }
    h2 {
      text-align: center;
      margin-top: 20px;
    }

    // ======== ProductsListItem ==============

    .beerSection {
      margin-top: 0px;
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      height: 60px;
      background: #5a656d;
      border-radius: 6px;
    }
    .nameProduct {
      margin-top: 0px;
      display: flex;
      flex-direction: row;
    }
    h3 {
      text-align: left;
      margin-top: 8px;
      margin-botton: 0px;
      padding: 0;
      margin-left: 8px;
      width: 285.25px;
      height: 0px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 8px;
      color: #f7af1d;
    }
    h4 {
      text-align: right;
      margin-top: 0px;
      margin-botton: 8px;
      margin-right: 8px;
      width: 285.25px;
      height: 0px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
    }
    .starProduct {
      text-align: left;
      margin-top: 0px;
      margin-botton: 8px;
      margin-left: 16px;
      width: 285.25px;
      height: 0px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
    }
    .starIcon {
      margin-botton: 8px;
      margin-left: 8px;
      width: 13px;
      height: 16px;
      color: #c4c4c4;
    }
    .heartIcon {
      margin-top: 8px;
      margin-right: 8px;
      width: 13px;
      height: 16px;
      color: #b0afaf;
    }
    .line {
      // pading: 0;
      margin: 6px;
      border: 1px solid white;
    }
    // ======== ProductsList ==============
    .beerList {
      // padding-top: 20px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      background-color: #38444d;
      width: 90%;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      color: #5a656d;
      border-radius: 8px;
    }

    .beerType {
      text-align: center;
      margin-top: 10px;
      // margin-left: 5%;
      // width: 198px;
      height: 22px;

      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;

      color: #f7af1d;
    }

    // ======== ProductsListItemDescription ==============

    // ======== Commun styles ==============
    .hidden {
      display: hidden;
    }
  `;
  return {
    Styles,
  };
}
