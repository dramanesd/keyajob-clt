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
  return apiCall("post", `/api/user/${id}/companies/new`, company)
    .then((res) => {})
    .catch((err) => {
      dispatch(addError(err.message));
    });
};

export const postNewJob = (job) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.userId;
  return apiCall("post", `/api/users/${id}/jobs/new`, job)
    .then((res) => {})
    .catch((err) => {
      dispatch(addError(err.message));
    });
};
