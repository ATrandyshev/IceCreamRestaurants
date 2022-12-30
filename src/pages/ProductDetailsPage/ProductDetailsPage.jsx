import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";
import { ProductDetailsContainer } from "../../containers/ProductDetailsContainer/ProductDetailsContainer";

export const ProductDetailsPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <ProductDetailsContainer />
      </ErrorBoundary>
    </Layout>
  );
};
