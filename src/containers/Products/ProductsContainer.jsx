import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllProducts } from "../../store/product/thunk/load-all-products";
import {
  selectIsProductsLoading,
  selectIsProductsFailed,
  selectProducts,
} from "../../store/product/selectors";
import { Products } from "../../components/Products/Products";

export const ProductsContainer = () => {
  const dispatch = useDispatch();
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const isProductsFailed = useSelector(selectIsProductsFailed);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(loadAllProducts());
  }, []);

  if (isProductsFailed) {
    return <span>Error</span>;
  }

  if (isProductsLoading) {
    return <span>Loading</span>;
  }

  return <Products products={products} />;
};
