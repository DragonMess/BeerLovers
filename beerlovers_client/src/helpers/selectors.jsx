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
    console.log(beersFilteredByBrewer);
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

// =======Data in localstorage=========
// [
//   { id: 0, firstname: "test", lastname: "test", email: "test@test.com" },
//   { id: 1, firstname: "demo", lastname: "demo", email: "demo@demo.com" },
// ];
// =======Easy way to get data from localstorage=========
// var users = JSON.parse(localStorage.getItem("key_users"));
// var user0 = users[0];
// =======function with filter=========
export function getUserById(id) {
  return JSON.parse(localStorage.getItem("users")).filter(
    (users) => users.id === id
  );
}
