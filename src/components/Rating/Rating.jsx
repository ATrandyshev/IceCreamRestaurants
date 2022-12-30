import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";
import PropTypes from "prop-types";
import classnames from "classnames";
import { MAX_RATING } from "./constants";
import styles from "./styles.module.css";

export const Rating = ({ value, size = "medium" }) => {
  return (
    <div>
      {new Array(MAX_RATING).fill(null).map((_, index) => (
        <img
          src={index >= value ? Star : GoldStar}
          key={index}
          className={classnames(styles.star, styles[size])}
          loading="lazy"
          alt="rating"
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
  size: PropTypes.string,
};
