import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";
import styles from "./styles.module.css";

export const MainPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <h2 className={styles.root}>Welcome!!!</h2>
        <p className={styles.root}>Select "restaurants" category</p>
      </ErrorBoundary>
    </Layout>
  );
};
