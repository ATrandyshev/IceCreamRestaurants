import userSlice from "../../user";
import reviewSlice from "../index";
import restaurantSlice from "../../restaurant";

export function addReview(review) {
  return function (dispatch, getState) {
    dispatch(
      userSlice.actions.addUser({ id: review.userId, name: review.name })
    );

    dispatch(reviewSlice.actions.addReview(review));

    dispatch(
      restaurantSlice.actions.addReview({
        id: review.restaurantId,
        idreview: review.id,
      })
    );
  };
}
