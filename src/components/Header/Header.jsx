import Logo from "./img/logo.svg";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/" className={styles.logoLink}>
        <img src={Logo} className={styles.logo} alt="logo" />
      </Link>
      <Link to="/restaurants" className={styles.restaurantsLink}>
        Restaurants
      </Link>
      <Link to="/basket" className={styles.basketLink}>
        Basket
      </Link>
      <Link to="/products" className={styles.allMenuLink}>
        Products
      </Link>
    </header>
  );
};
