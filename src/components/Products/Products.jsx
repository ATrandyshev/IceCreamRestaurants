import classnames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const Products = ({ products }) => {
  return (
    <div className={classnames(styles.layout)}>
      {products.map(({ id, name }) => (
        <NavLink
          key={id}
          to={`/product/${id}`}
          className={classnames(styles.productLink)}
        >
          <div>{name}</div>
        </NavLink>
      ))}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};
