import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { FETCH_ALL_CATEGORIES } from '../actionTypes';

export const loadCategories = categories => ({
    type: FETCH_ALL_CATEGORIES,
    categories
}); 

export const fetchCategories = () => {
    return dispatch => {
        return apiCall("get", "/api/categories")
          .then(res => {
            dispatch(loadCategories(res));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
      };
}