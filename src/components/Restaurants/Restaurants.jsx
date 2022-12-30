import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { RestaurantTabsContainer } from "../../containers/RestaurantTabs/RestaurantTabsContainer";
import styles from "./styles.module.css";

export const Restaurants = ({ restaurantIds }) => {
  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div>
        <RestaurantTabsContainer />
        <Outlet />
      </div>
    </div>
  );
};

Restaurants.propTypes = {
  restaurantIds: PropTypes.array,
};
