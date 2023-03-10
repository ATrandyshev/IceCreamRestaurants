import { selectReviewByIds } from "../review/selectors";
import { createSelector } from "reselect";

export const selectRestaurantState = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantState(state).ids;

export const selectIsLoading = (state) =>
  selectRestaurantState(state).status === "loading";

export const selectIsFailed = (state) =>
  selectRestaurantState(state).status === "failed";

export const selectRestaurantById = (state, id) =>
  selectRestaurantState(state).entities[id];

export const selectRestaurants = (state) =>
  Object.values(selectRestaurantState(state).entities);

const selectRestaurantReviewIds = (state, restaurantId) => {
  return selectRestaurantById(state, restaurantId).reviews || [];
};

export const selectRestaurantRating = createSelector(
  [
    (state) => state,
    (_, restaurantId) => restaurantId,
    selectRestaurantReviewIds,
  ],
  (state, restaurantId, reviewIds) => {
    const reviews = selectReviewByIds(state, reviewIds);

    if (!reviews?.filter(Boolean).length) {
      return 0;
    }

    return Math.ceil(
      reviews.reduce((prev, curr) => prev + curr.rating, 0) / reviews.length
    );
  }
);

export const selectRestaurantReviewsById = (state, payload) =>
  selectRestaurantState(state)?.entities[payload.restaurantId]?.reviews || [];

export const selectRestaurantProductsById = (state, payload) =>
  selectRestaurantState(state)?.entities[payload.restaurantId]?.menu || [];

export const selectAllRestaurantProductsIds = (state) => {
  const result = selectRestaurantState(state).ids.reduce((acc, id) => {
    const restProducts = selectRestaurantState(state)?.entities[id]?.menu || [];
    acc = [...acc, ...restProducts];
    return acc;
  }, []);

  return result;
};
