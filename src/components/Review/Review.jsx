import { memo } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Rating } from "../Rating/Rating";
import UserContainer from "../../containers/User/User";
import styles from "./styles.module.css";

const Review = ({ userId, text, rating, className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.header}>
        <UserContainer userId={userId} className={styles.user} />
        <Rating value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};

Review.propTypes = {
  userId: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
  className: PropTypes.string,
};

export const MemoReview = memo(Review);
