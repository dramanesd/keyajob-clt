import React from "react";
import JobList from "../containers/JobList";
import CategoryList from "../containers/CategoryList";

const JobTimeline =  props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <CategoryList />
        <JobList />
      </div>
    </div>
  );
}

export default JobTimeline;