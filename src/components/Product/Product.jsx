import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

export const Product = ({
  name,
  productCount,
  removeProduct,
  addProduct,
  className,
}) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button
          onClick={removeProduct}
          className={styles.action}
          disabled={productCount <= 0}
        >
          -
        </button>
        <div className={styles.count}>{productCount}</div>
        <button
          onClick={addProduct}
          className={styles.action}
          disabled={productCount >= 25}
        >
          +
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  productCount: PropTypes.number,
  removeProduct: PropTypes.func,
  addProduct: PropTypes.func,
  className: PropTypes.string,
};
