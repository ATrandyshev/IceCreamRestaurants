import PropTypes from "prop-types";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import ReviewContainer from "../../containers/Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ reviewIds }) => {
  return (
    <div className={styles.reviews}>
      {reviewIds?.length &&
        reviewIds?.map((reviewId) => (
          <ReviewContainer key={reviewId} reviewId={reviewId} />
        ))}
      <NewReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  Reviews: PropTypes.array,
};
