import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styleComponents from "../styledComponents/styleComponent";
const { Styles } = styleComponents();

const ProductListItem = (props) => {
  const { name, price, rate } = props;
  return (
    <Styles>
      <section className="beerSection">
        <div className="nameProduct">
          <h3>{name}</h3>
          <FontAwesomeIcon className="heartIcon" icon={["fas", "heart"]} />
          <FontAwesomeIcon className="heartIcon" icon={["far", "hearts"]} />
        </div>
        <hr className="line" />
        <div className="nameProduct">
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <h4 className="starProduct">{rate} / 5</h4>
          <h4>Price ${price}</h4>
        </div>
      </section>
    </Styles>
  );
};
export default ProductListItem;
