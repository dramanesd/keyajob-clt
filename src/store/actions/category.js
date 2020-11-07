import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { FETCH_ALL_CATEGORIES } from "../actionTypes";

export const loadCategories = (categories) => ({
  type: FETCH_ALL_CATEGORIES,
  categories,
});

export const fetchCategories = () => {
  return (dispatch) => {
    const url =
      process.env.REACT_APP_PROD == "production"
        ? "/api/categories"
        : "/api/categories";
    return apiCall("get", url)
      .then((res) => {
        dispatch(loadCategories(res));
      })
      .catch((err) => {
        dispatch(addError(err.message));
      });
  };
};
