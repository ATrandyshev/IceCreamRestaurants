import { useReducer } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RatingInput } from "../RaitingInput/RaitingInput";
import { addReview } from "../../store/review/thunk/add-review";
import { nanoid } from "nanoid";
import styles from "./styles.module.css";

const actionTypes = {
  changeName: "changeName",
  changeText: "changeText",
  changeRating: "changeRating",
};

const DEFAULT_STATE = { name: "Default name", text: "", rating: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.changeName:
      return { ...DEFAULT_STATE, name: action.payload };

    case actionTypes.changeText:
      return { ...state, text: action.payload };

    case actionTypes.changeRating:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formState, formDispatch] = useReducer(reducer, DEFAULT_STATE);
  const { id: restaurantId } = useParams();
  const dispatch = useDispatch();

  const validate = (statefrom) => {
    let isValidateForm = false;

    if (statefrom.text.length > 0 && statefrom.name.length > 0) {
      isValidateForm = true;
      return isValidateForm;
    }

    return isValidateForm;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate(formState);

    if (isValid) {
      const review = {
        ...formState,
        id: nanoid(),
        userId: nanoid(),
        restaurantId: restaurantId,
      };
      dispatch(addReview(review));
    } else {
      alert("Please fill in all fields");
    }
  };

  const onClick = (e) => {
    const rating = e.target.dataset.numberStar;

    formDispatch({
      type: actionTypes.changeRating,
      payload: Number(rating),
    });
  };

  return (
    <>
      <h3>New Review</h3>

      <form onSubmit={handleSubmit} className={styles.root}>
        <label htmlFor="reviewInputName" className={styles.title}>
          Name
        </label>
        <input
          id="reviewInputName"
          value={formState.name}
          onChange={(event) => {
            formDispatch({
              type: actionTypes.changeName,
              payload: event.target.value,
            });
          }}
        />

        <label htmlFor="reviewInputText" className={styles.title}>
          Text
        </label>
        <input
          id="reviewInputText"
          value={formState.text}
          onChange={(event) => {
            formDispatch({
              type: actionTypes.changeText,
              payload: event.target.value,
            });
          }}
        />

        <label htmlFor="reviewInputRating" className={styles.title}>
          Rating
        </label>

        <RatingInput value={formState.rating} onClick={onClick} />

        <input type="submit" value="Отправить" className={styles.title} />
      </form>
    </>
  );
};
