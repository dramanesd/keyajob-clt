import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import jobs from "./jobs";
import categories from "./categories";
import jobTypes from "./jobTypes";
import companies from "./companies";
import tags from "./tags";

const rootReducer = combineReducers({
  currentUser,
  errors,
  jobs,
  categories,
  jobTypes,
  companies,
  tags
});

export default rootReducer;