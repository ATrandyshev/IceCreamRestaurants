import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadProductsIfNotExist } from "../../store/product/thunk/load-products";
import {
  selectIsProductsFailed,
  selectIsProductsLoading,
} from "../../store/product/selectors";
import { selectRestaurantProductsById } from "../../store/restaurant/selectors";
import Menu from "../../components/Menu/Menu";

export const MenuContainer = () => {
  const { id: restaurantId } = useParams();
  const dispatch = useDispatch();
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const isProductsFailed = useSelector(selectIsProductsFailed);
  const productIds = useSelector((state) =>
    selectRestaurantProductsById(state, { restaurantId })
  );

  useEffect(() => {
    dispatch(loadProductsIfNotExist(restaurantId));
  }, [restaurantId]);

  if (isProductsFailed) {
    return <span>Error</span>;
  }

  return isProductsLoading ? (
    <span>Loading</span>
  ) : (
    <Menu productIds={productIds} />
  );
};
