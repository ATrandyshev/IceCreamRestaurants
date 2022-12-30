import { memo } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import ProductContainer from "../../containers/Product/Product";
import styles from "./styles.module.css";

const Menu = ({ productIds }) => (
  <div className={classnames(styles.root, styles.menu)}>
    <span className={styles.menuTitle}>Menu</span>
    {productIds?.map((productId) => (
      <ProductContainer
        key={productId}
        productId={productId}
        className={styles.product}
      />
    ))}
  </div>
);

Menu.propTypes = {
  productIds: PropTypes.array,
};

export default memo(Menu);
