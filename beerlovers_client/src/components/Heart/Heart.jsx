import React from 'react'
import { filterFavouriteHeart} from "../../helpers/selectors"
import useApplication from "../../hooks/useApplicationData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Heart(props) {

  const { state, setState } = useApplication();
  const { findIdBeer } = props;
  const UserId = localStorage.getItem("UserId");
  const productByType = filterFavouriteHeart(state, UserId);
  const beers = productByType
    ? productByType.map((dataProduct) => {
      return (
        <div key={dataProduct.id}
          heart = {dataProduct.product_name}
        />
      );
    })
    : undefined;


  return (
    <div>
      <FontAwesomeIcon className="heartIcon" icon={["fas", "heart"]} />
      <FontAwesomeIcon className="heartIcon" icon={["far", "hearts"]} />
    </div>
  )
}
