import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleJob } from "../store/actions/jobs";
import JobDetail from '../components/JobDetail';

class JobPreview extends Component {
  componentDidMount() {
    let jobId = this.props.match.params.id;
    this.props.fetchSingleJob(jobId);
  }
  render() {
    const { jobs } = this.props;
    const jobItem = jobs.map(job => (
      <JobDetail
        key={job._id}
        title={job.title}
        description={job.description}
        applicationLink={job.applicationLink}
        company={job.company}
        category={job.category}
        jobType={job.jobType}
        tags={job.tags}
      />
    ));
    return (
      <div>
        {jobItem}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs
  };
}

export default connect(mapStateToProps, { fetchSingleJob })(JobPreview);