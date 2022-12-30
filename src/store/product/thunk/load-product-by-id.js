import productSlice from "..";
import { selectProductById } from "../selectors";

export function loadProductIfNotExist(productId) {
  return function (dispatch, getState) {
    const product = selectProductById(getState(), productId);
    if (product) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(`http://localhost:3001/api/products?productId=${productId}`)
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
