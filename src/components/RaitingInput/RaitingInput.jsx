import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";

const MAX_RATING = 5;

export const RatingInput = ({ value, size = "medium", onClick }) => {
  return (
    <div>
      {new Array(MAX_RATING).fill(null).map((_, index) => (
        <img
          src={index >= value ? Star : GoldStar}
          key={index}
          className={classnames(styles.star, styles[size])}
          loading="lazy"
          alt="rating"
          onClick={onClick}
          data-number-star={index + 1}
        />
      ))}
    </div>
  );
};

RatingInput.propTypes = {
  value: PropTypes.number,
  size: PropTypes.string,
  onClick: PropTypes.func,
};
