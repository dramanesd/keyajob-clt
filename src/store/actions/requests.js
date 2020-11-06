import { apiCall } from "../../services/api";
import { addError } from "./errors";

export const postNewRequest = request => (dispatch) => {
    return apiCall("post", `/api/requests/new`, request)
      .then(res => {})
      .catch(err => {
        dispatch(addError(err.message));
      });
  };