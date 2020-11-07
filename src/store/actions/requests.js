import { apiCall } from "../../services/api";
import { addError } from "./errors";

export const postNewRequest = (request) => (dispatch) => {
  const url =
    process.env.REACT_APP_PROD == "production"
      ? "/requests/new"
      : "/api/requests/new";
  return apiCall("post", url, request)
    .then((res) => {})
    .catch((err) => {
      dispatch(addError(err.message));
    });
};
