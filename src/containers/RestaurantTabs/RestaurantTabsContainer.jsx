import { useSelector } from "react-redux";
import { selectRestaurants } from "../../store/restaurant/selectors";
import { Tabs } from "../../components/Tabs/Tabs";

export const RestaurantTabsContainer = () => {
  const restaurants = useSelector(selectRestaurants);

  const tabs = restaurants.map(({ name, id }) => ({ label: name, id }));

  return <Tabs tabs={tabs} />;
};
