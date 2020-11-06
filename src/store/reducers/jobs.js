import { FETCH_ALL_JOBS, FETCH_SINGLE_JOB } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_JOBS:
      return [...action.jobs];
    case FETCH_SINGLE_JOB:
      return [...action.job];
    default:
      return state;
  }
};