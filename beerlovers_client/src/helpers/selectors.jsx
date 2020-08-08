export function filterBeer(state, type) {
  const beersFiltered = [];
  for (let product of state.products) {
    if (product.product_type === type) {
      beersFiltered.push(product);
    }
  }
  return beersFiltered;
}
