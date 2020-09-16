import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styleComponents from "../../styledComponents/styleComponent";
import ButtonFavourite from "../Button/ButtonFavourite";
const { Styles } = styleComponents();

const ProductListItem = (props) => {
  const {
    name,
    price,
    rate,
    findIdBeer,
    dataProduct,
    type,
    IsFavouriteByUser,
    favouriteADD,
    favouriteDelete,
    userId,
    id,
  } = props;

  const [isFavourite, setIsFavourite] = useState(IsFavouriteByUser);
  const handleFavourite = (e) => {
    e.preventDefault();
    // setIsFavourite(!isFavourite);
    // console.log(id)

    if (isFavourite === false) {
      setIsFavourite(!isFavourite);
      console.log("object");
      favouriteADD(id, userId);
    }
    if (isFavourite === true) {
      setIsFavourite(!isFavourite);
      console.log("object");
      favouriteDelete(id, userId);
    }
  };
  return (
    <Styles>
      <div className="beerSection">
        <section className="nameProduct">
          <h3>{name}</h3>
          <ButtonFavourite
            isFavourite={isFavourite}
            onClick={handleFavourite}
          ></ButtonFavourite>
        </section>
        <hr className="line" />
        <div className="nameProduct" onClick={(e) => findIdBeer(dataProduct)}>
          <FontAwesomeIcon
            className="starIcon"
            icon={["fas", "star"]}
          ></FontAwesomeIcon>
          {/* <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} />
          <FontAwesomeIcon className="starIcon" icon={["fas", "star"]} /> */}
          <h4 className="starProduct">{rate} / 5</h4>
          <h4>{type}</h4>
          <h4>{price}</h4>
          {/* <h4>Price ${(Math.round(price * 100) / 100).toFixed(2)}</h4> */}
        </div>
      </div>
    </Styles>
  );
};
export default ProductListItem;
