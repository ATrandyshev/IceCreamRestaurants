import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectProductIdsFromBasket } from "../../store/basket/selectors";
import Basket from "../../components/Basket/Basket";

const BasketContainer = ({ className }) => {
  const productIds = useSelector(selectProductIdsFromBasket);
  return <Basket productIds={productIds} className={className} />;
};

BasketContainer.propTypes = {
  className: PropTypes.string,
};

export default BasketContainer;
