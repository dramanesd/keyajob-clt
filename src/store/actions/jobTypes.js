import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { FETCH_ALL_JOBTYPES } from "../actionTypes";

export const loadJobTypes = (jobTypes) => ({
  type: FETCH_ALL_JOBTYPES,
  jobTypes,
});

export const fetchJobTypes = () => {
  return (dispatch) => {
    const url =
      process.env.REACT_APP_PROD == "production"
        ? "/jobtypes"
        : "/api/jobtypes";
    return apiCall("get", url)
      .then((res) => {
        dispatch(loadJobTypes(res));
      })
      .catch((err) => {
        dispatch(addError(err.message));
      });
  };
};
