import styles from "./styles.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

export const BasketItem = ({ productName, productCount, className }) => (
  <div className={classnames(styles.root, className)}>
    <span>{productName}</span>
    <span>{productCount}</span>
  </div>
);

BasketItem.propTypes = {
  productIds: PropTypes.string,
  productCount: PropTypes.number,
  className: PropTypes.string,
};
