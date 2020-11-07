import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { FETCH_ALL_COMPANIES } from "../actionTypes";

export const loadCompanies = (companies) => ({
  type: FETCH_ALL_COMPANIES,
  companies,
});

export const fetchCompanies = () => {
  return (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.userId;
    const url =
      process.env.REACT_APP_PROD == "production"
        ? `/user/${id}/companies`
        : `/api/user/${id}/companies`;
    return apiCall("get", url)
      .then((res) => {
        dispatch(loadCompanies(res));
      })
      .catch((err) => {
        dispatch(addError(err.message));
      });
  };
};
