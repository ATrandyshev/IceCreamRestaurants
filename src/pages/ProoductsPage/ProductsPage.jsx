import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Layout } from "../../components/Layout/Layout";
import { ProductsContainer } from "../../containers/Products/ProductsContainer";

export const ProductsPage = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <ProductsContainer />
      </ErrorBoundary>
    </Layout>
  );
};
