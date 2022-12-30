import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsFailed,
  selectIsLoading,
  selectRestaurantIds,
} from "../../store/restaurant/selectors";
import { loadRestaurantsIfNotExist } from "../../store/restaurant/thunks/load-restaurants";
import { Restaurants } from "../../components/Restaurants/Restaurants";

const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return restaurantIds?.length > 0 ? (
    <Restaurants restaurantIds={restaurantIds} />
  ) : null;
};

export default RestaurantsContainer;
