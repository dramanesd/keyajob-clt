import React from 'react';
import { Link } from 'react-router-dom';
import ApplyButton from "./ApplyButton";

const JobDetail = props => {
  const {title, description, applicationLink, company, category, jobType, tags} = props;
    const tagItems = tags.map((tag) => (
    <li key={tag._id} className="tag"><span><i className="fa fa-tags"></i></span>{tag.tagName}</li>
  )); 
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link className="back-to-jobs-link" to="/jobs" style={{marginTop: "1rem", display: "inline-block", color: "#e64959"}}><i className="fa fa-angle-double-left"></i> Back to jobs</Link>
              <div className="show-job">
                <div className="show-job-header d-flex flex-row flex-wrap justify-content-between">
                  <div className=" show-job-header-title d-flex flex-row">
                    <span><img className="img-fluid" src={company.companyLogo} alt={company.companyName}/></span>
                    <span>
                      <h5>{company.companyName}</h5>
                    </span>
                  </div>
                  <div className="show-job-header-links d-flex flex-row">
                    <span className="button-container"><button className="button-secondary"><Link to={`https://${company.companyWebsite}`} target="_blank"><span>Website</span></Link></button></span>
                    <span><Link to={`https://${company.linkedinUrl}`} target="_blank"><i className="fa fa-linkedin"></i></Link></span>
                    <span><Link to={`https://${company.facebookUrl}`} target="_blank"><i className="fa fa-facebook"></i></Link></span>
                    <span><Link to={`https://${company.twitterUrl}`} target="_blank"><i className="fa fa-twitter"></i></Link></span>
                  </div>
                </div>
                <hr/>
                <div className="show-job-hero">
                  <h3 className="text-center">{title}</h3>
                  <div className="d-flex flex-row flex-wrap justify-content-center">
                    <span className="category Development">{category.categoryName}</span>
                    <span className="job-type"><span><i className="fa fa-clock-o"></i></span> {jobType.jobTypeName}</span>
                    <ul className="list-unstyled d-flex flex-row flex-wrap justify-content-center">
                      {tagItems}
                    </ul>
                  </div>
                </div>
                <ApplyButton applicationLink={applicationLink} />
                <div className="job-content">
                  <div className="job-description">
                      <h4>Job description</h4>
                      <hr/>
                      <div>
                        {description}
                        <h5><strong>About us</strong></h5>
                        
                        <h5><strong>Role</strong></h5>
                        
                        <h5><strong>Bonus</strong></h5>
                        
                        <h5><strong>Applying</strong></h5>
                        
                        <ApplyButton applicationLink={applicationLink} />
                      </div>
                  </div>
                </div>
              </div>
              <Link className="back-to-jobs-link" to="/jobs" style={{marginTop: "1rem", display: "inline-block", color: "#e64959"}}><i className="fa fa-angle-double-left"></i> Back to jobs</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default JobDetail;