import styled from "styled-components";

export default function StyleCart() {
  const Styles = styled.div`
    // ====item cart ===========

    .img-item {
      margin-top: 5px;
      margin-left: 20px;
      width: 20px;
      // height: 145px;
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

    // ==== cart ===========
    .articleCart {
      width: 100%;
      margin-left: auto;
      margin-rigth: auto;
      padding: 8px;
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
      background: red;
    }
    .colProduct {
      text-align: left;
      background: yellow;
    }
  `;
  return {
    Styles,
  };
}
