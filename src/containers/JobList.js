import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllJobs } from "../store/actions/jobs";
import JobItem from "../components/JobItem";

class JobList extends Component {
  componentDidMount() {
    this.props.fetchAllJobs();
  }
  render() {
    const { jobs } = this.props;
    let jobList = jobs.map(j => {
      return (
        <JobItem
          key={j._id}
          id={j._id}
          date={j.createdAt}
          title={j.title}
          company={j.company}
          category={j.category.categoryName}
          jobType={j.jobType.jobTypeName}
          tag={j.tags}
        />
    )});
    return (
      <div className="col-sm-12 col-md-9 jobList">
        {jobList}
        <p className="d-flex justify-content-center">
          <a className="btn btn-primary my-2" style={{marginRight: 5}}>Load More</a>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    currentUser: state.currentUser.user.id
  };
}

export default connect(mapStateToProps, { fetchAllJobs})(JobList);