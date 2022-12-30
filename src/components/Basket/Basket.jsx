import classnames from "classnames";
import PropTypes from "prop-types";
import { BasketItemContainer } from "../../containers/BasketItem/BasketItem";
import styles from "./styles.module.css";

const Basket = ({ productIds, className }) => (
  <div className={styles.root}>
    <div className={classnames(styles.basket, className)}>
      <h2>Basket</h2>
      {productIds?.length > 0 &&
        productIds.map((productId) => (
          <BasketItemContainer
            key={productId}
            productId={productId}
            className={styles.product}
          />
        ))}
    </div>
  </div>
);

Basket.propTypes = {
  productIds: PropTypes.array,
  className: PropTypes.string,
};

export default Basket;
