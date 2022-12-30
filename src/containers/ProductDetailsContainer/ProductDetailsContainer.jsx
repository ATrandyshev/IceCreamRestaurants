import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectIsProductsFailed,
  selectIsProductsLoading,
  selectProductById,
} from "../../store/product/selectors";
import { loadProductIfNotExist } from "../../store/product/thunk/load-product-by-id";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";

export const ProductDetailsContainer = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, productId));
  const isLoading = useSelector(selectIsProductsLoading);
  const isFailed = useSelector(selectIsProductsFailed);

  useEffect(() => {
    dispatch(loadProductIfNotExist(productId));
  }, [productId]);

  if (isLoading || !product) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  const { name, price, id, ingredients } = product;

  return (
    <ProductDetails
      name={name}
      price={price}
      id={id}
      ingredients={ingredients}
    />
  );
};
