import classnames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const TabsRestaurant = () => {
  return (
    <div className={styles.root}>
      <NavLink
        to=""
        className={({ isActive }) =>
          classnames(styles.link, {
            [styles.selected]: isActive,
          })
        }
      >
        Menu
      </NavLink>
      <NavLink
        to="reviews"
        className={({ isActive }) =>
          classnames(styles.link, {
            [styles.selected]: isActive,
          })
        }
      >
        Reviews
      </NavLink>
    </div>
  );
};
