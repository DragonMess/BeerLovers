export function filterFavouriteBeers(state, idUser) {
  // const idUser = localStorage.getItem("UserId");
  const beersFilteredFavourites = [];
  const favouriteId = [];

  if (idUser) {
    for (let favourite of state.favourites) {
      if (favourite.user_id == idUser) {
        favouriteId.push(favourite.product_id);
      }
    }

    for (let idFavourite of favouriteId) {
      for (let product of state.products) {
        if (product.id == idFavourite) {
          beersFilteredFavourites.push(product);
        }
      }
    }
  }

  return beersFilteredFavourites;
}
export function filterFavouriteHeart(state, idUser) {
  // const idUser = localStorage.getItem("UserId");
  const beersFilteredFavourites = [];
  const favouriteId = [];
  const heartEmpty = '<FontAwesomeIcon className="heartIcon" icon={["far", "hearts"]} />';
  const heart = '<FontAwesomeIcon className="heartIcon" icon={["fas", "heart"]} />';

  if (idUser) {
    for (let favourite of state.favourites) {
      if (favourite.user_id == idUser) {
        favouriteId.push(favourite.product_id);
      }
    }

    for (let idFavourite of favouriteId) {
      for (let product of state.products) {
        if (product.id == idFavourite) {
          beersFilteredFavourites.push(heart);
        }else {
          beersFilteredFavourites.push(heartEmpty);
        }
      }
    }
  }

  return beersFilteredFavourites;
}
export function filterProductsByUser(state, idUser) {
  const filterProducts = [];

  for (let product of state.products) {
    if (product.brewery_id == idUser) {
      filterProducts.push(product);
    }
  }
  return filterProducts;
}

// product_name, product_type, unit_price, alcohol, ibu, ebc, stock_quantity, brewerY_ID, rate, img
export function filterBeer(state, type, idBrewery) {
  const brewer = localStorage.getItem("brewerId");

  const beersFiltered = [];
  const beersFilteredByBrewer = [];
  if (brewer) {
    for (let product of state.products) {
      if (product.brewery_id == idBrewery) {
        beersFilteredByBrewer.push(product);
      }
    }
    for (let beer of beersFilteredByBrewer) {
      if (beer.product_type === type) {
        beersFiltered.push(beer);
      }
    }
  }
  if (!idBrewery) {
    for (let product of state.products) {
      if (product.product_type === type) {
        beersFiltered.push(product);
      }
    }
  }

  return beersFiltered;
}

// =======function with filter=========
export function getUserById(id) {
  return JSON.parse(localStorage.getItem("users")).filter(
    (users) => users.id === id
  );
}

export function findBreweryName(state, idUser) {
  let breweryName;

  for (let brewer of state.breweries) {
    if (brewer.brewer_id == idUser) {
      breweryName = brewer.trade_name;
    }
  }

  return breweryName;
}
