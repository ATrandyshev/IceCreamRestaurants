import PropTypes from "prop-types";
import styles from "./styles.module.css";

export const ProductDetails = ({ name, price, id, ingredients }) => {
  return (
    <ul className={styles.root}>
      <li>
        <span className={styles.lable}>Id:</span> {id}
      </li>
      <li>
        <span className={styles.lable}>Name:</span> {name}
      </li>
      <li>
        <span className={styles.lable}>Price:</span> {price}
      </li>
      <li>
        <span className={styles.lable}>Ingredients:</span>{" "}
        {ingredients.join(", ")}
      </li>
    </ul>
  );
};

ProductDetails.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  ingredients: PropTypes.array,
};
