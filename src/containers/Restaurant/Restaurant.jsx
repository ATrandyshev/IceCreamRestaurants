import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  selectRestaurantById,
  selectRestaurantRating,
} from "../../store/restaurant/selectors";
import { loadReviewsIfNotExist } from "../../store/review/thunk/load-reviews";
import { Restaurant } from "../../components/Restaurant/Restaurant";

const RestaurantContainer = ({ className }) => {
  const { id: restaurantId } = useParams();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const rating = useSelector((state) =>
    selectRestaurantRating(state, restaurantId)
  );

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  return (
    <Restaurant restaurant={restaurant} rating={rating} className={className} />
  );
};

RestaurantContainer.propTypes = {
  className: PropTypes.string,
};

export default RestaurantContainer;
