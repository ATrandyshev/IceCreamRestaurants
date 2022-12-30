import { selectProductIds } from "../selectors";
import { selectAllRestaurantProductsIds } from "../../restaurant/selectors";
import productSlice from "../index";

export function loadAllProducts() {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    const restaurantsProducts = selectAllRestaurantProductsIds(getState());

    if (
      restaurantsProducts.length > 0 &&
      restaurantsProducts.every((productId) => productIds.includes(productId))
    ) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(`http://localhost:3001/api/products`)
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
