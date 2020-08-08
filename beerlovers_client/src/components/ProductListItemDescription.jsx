import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styleComponents from "../styledComponents/styleComponent";
const { Styles } = styleComponents();

const ProductListItemDescription = (props) => {
  const { name, price, rate } = props;
  return (
    <Styles>
      <section className="beerDescriptionSection">
        <div className="HeaderProductDescription">
          <img className="beerImage" src="./images/blonde1.png"></img>
          <div>
            <FontAwesomeIcon className="heartIcon" icon={["fas", "heart"]} />
            <FontAwesomeIcon className="heartIcon" icon={["far", "hearts"]} />
            <h3 className="nameProductDescription">
              Samuel Adams Cherry Wheat
            </h3>
          </div>
        </div>
        {/* <hr className="line" />
        <div className="nameProduct">
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <h4 className="starProduct">{rate} / 5</h4>
          <h4>Price ${price}</h4>
        </div> */}
      </section>
    </Styles>
  );
};
export default ProductListItemDescription;
