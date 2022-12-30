import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

export const User = ({ name, className }) => (
  <span className={classnames(styles.root, className)}>{name}</span>
);

User.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};
