import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectIsReviewsFailed,
  selectIsReviewsLoading,
} from "../../store/review/selectors";
import { selectRestaurantReviewsById } from "../../store/restaurant/selectors";
import { loadUsersIfNotExist } from "../../store/user/thunks/load-users";
import { Reviews } from "../../components/Reviews/component";

export const ReviewsContainer = () => {
  const { id: restaurantId } = useParams();
  const dispatch = useDispatch();
  const isReviewsLoading = useSelector(selectIsReviewsLoading);
  const isReviewsFailed = useSelector(selectIsReviewsFailed);
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

  if (isReviewsFailed) {
    return <span>Error</span>;
  }

  return isReviewsLoading ? (
    <span>Loading</span>
  ) : (
    <Reviews reviewIds={reviewIds} />
  );
};
