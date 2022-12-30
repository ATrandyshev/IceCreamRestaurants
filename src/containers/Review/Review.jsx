import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectReviewById } from "../../store/review/selectors";
import { MemoReview } from "../../components/Review/Review";

const ReviewContainer = ({ reviewId, className }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  const { text, rating, userId } = review;

  return (
    <MemoReview
      text={text}
      rating={rating}
      userId={userId}
      className={className}
    />
  );
};

ReviewContainer.propTypes = {
  reviewId: PropTypes.string,
  className: PropTypes.string,
};

export default ReviewContainer;
