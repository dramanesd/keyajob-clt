import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { FETCH_ALL_JOBS, FETCH_SINGLE_JOB } from "../actionTypes";

export const loadJobs = (jobs) => ({
  type: FETCH_ALL_JOBS,
  jobs,
});

export const loadOneJob = (job) => ({
  type: FETCH_SINGLE_JOB,
  job,
});

export const fetchAllJobs = () => {
  return (dispatch) => {
    // const url = process.env.NODE_ENV == "development" ? "/api/jobs" : "/jobs";
    return apiCall("get", "/api/jobs")
      .then((res) => {
        dispatch(loadJobs(res));
      })
      .catch((err) => {
        dispatch(addError(err.message));
      });
  };
};

export const fetchSingleJob = (jobId) => {
  return (dispatch) => {
    const url =
      process.env.REACT_APP_PROD == "production"
        ? `/jobs/${jobId}`
        : `/api/jobs/${jobId}`;
    return apiCall("get", url)
      .then((res) => {
        dispatch(loadOneJob(res));
      })
      .catch((err) => {
        dispatch(addError(err.message));
      });
  };
};

export const postNewCompany = (company) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.userId;
  const url =
    process.env.REACT_APP_PROD == "production"
      ? `/user/${id}/companies/new`
      : `/api/user/${id}/companies/new`;
  return apiCall("post", url, company)
    .then((res) => {})
    .catch((err) => {
      dispatch(addError(err.message));
    });
};

export const postNewJob = (job) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.userId;
  const url =
    process.env.REACT_APP_PROD == "production"
      ? `/users/${id}/jobs/new`
      : `/api/users/${id}/jobs/new`;
  return apiCall("post", url, job)
    .then((res) => {})
    .catch((err) => {
      dispatch(addError(err.message));
    });
};
