import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { FETCH_ALL_TAGS } from '../actionTypes';

export const loadTags = tags => ({
    type: FETCH_ALL_TAGS,
    tags
}); 

export const fetchTags = () => {
    return dispatch => {
        return apiCall("get", "/api/tags")
          .then(res => {
            dispatch(loadTags(res));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
      };
}