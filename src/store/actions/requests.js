import { apiCall } from "../../services/api";
import { addError } from "./errors";

export const postNewRequest = (request) => (dispatch) => {
  const url =
    process.env.NODE_ENV == "development"
      ? "/api/requests/new"
      : "/requests/new";
  return apiCall("post", url, request)
    .then((res) => {})
    .catch((err) => {
      dispatch(addError(err.message));
    });
};
