import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Rating } from "../Rating/Rating";
import { TabsRestaurant } from "../TabsRestaurant/TabsRestaurant";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurant, rating }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rating value={rating} />
      </div>
      <div className={styles.detailedInfo}>
        <TabsRestaurant />

        <Outlet />
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.object,
  rating: PropTypes.number,
};
