import styled from "styled-components";

export default function StyleCart() {
  const Styles = styled.div`
    // ====item cart ===========

    .img-item {
      margin-top: 5px;
      margin-left: 5px;
      width: 20px;
      height: 60px;
    }
    .item-name {
      color: white;
    }
    .line {
      // pading: 0;
      margin: 6px;
      border: 1px solid white;
    }
    .item-tr {
      display: flex;
      align-items: center;
    }
    .form-control {
      width: 80%;
      // hight: 20px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 800;
      font-size: 13px;
      color: white;
      background-color: #b0afaf;
    }
    .btn-plus {
      widht: 50%;
      padding: 0px 2px 0px 2px;
      color: white;
      background-color: #3a4750;
      box-shadow: 0px 2px 2px rgba(202, 199, 199, 0.25);
      border-radius: 6px;
      font-size: 13px;
    }
    .txtPrice {
      margin-right: 20px;
    }

    // ==== cart ===========
    .articleCart {
      width: 100%;
      margin-left: auto;
      margin-rigth: auto;
      padding: 15px;
    }
    .table-header {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      color: White;
    }
    .colPrice {
      text-align: right;
      // margin-right: 2px;
      // background: red;
    }
    .colProduct {
      text-align: left;
      // background: yellow;
    }
    .btn-success {
      margin-left: 50px;
    }
  `;
  return {
    Styles,
  };
}
