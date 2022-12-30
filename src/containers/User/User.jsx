import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectUserNameById } from "../../store/user/selectors";
import { User } from "../../components/User/User";

const UserContainer = ({ userId, className }) => {
  const name = useSelector((state) => selectUserNameById(state, userId));

  if (!name) {
    return null;
  }

  return <User name={name} className={className} />;
};

UserContainer.propTypes = {
  userId: PropTypes.string,
  className: PropTypes.string,
};

export default UserContainer;
