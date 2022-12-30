import PropTypes from "prop-types";
import { Tab } from "../Tab/Tab";

import styles from "./styles.module.css";

export const Tabs = ({ tabs }) => (
  <div className={styles.root}>
    {tabs.map(({ label, id }) => (
      <Tab key={id} label={label} id={id} className={styles.tab} />
    ))}
  </div>
);

Tab.propTypes = {
  tabs: PropTypes.array,
};
