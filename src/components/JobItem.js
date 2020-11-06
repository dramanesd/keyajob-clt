import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const JobItem = props => {
  const {id, date, title, company, category, jobType, tag} = props;
  const tagItems = tag.map((tag) => (
    <li key={tag._id} className="tag"><span><i className="fa fa-tags"></i></span>{tag.tagName}</li>
  ));
  return (
    <div className="row d-flex justify-content-between">
      <div className="col-12">
        <div className="jobItem">
          <div className="row">
            <div className="col-2 job-meta">
              <span><i className="fa fa-star-o"></i></span>
              <span><img className="img-fluid" style={{width: 60}} src={company.companyLogo} alt={company.companyName} /></span>
            </div>
            <div className="col-8">
              <div className="job-details">
                <h5 style={{display: "inline-block"}}><Link to={`/jobs/${id}`}>{title}</Link></h5>
                <ul className="list-unstyled d-flex flex-row flex-wrap">
                  <li className="category Development">{category}</li>
                  <li className="job-type"><span><i className="fa fa-clock-o"></i></span>{jobType}</li>
                  <li>
                    <ul className="list-unstyled d-flex flex-row flex-wrap">
                      {tagItems}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-2">
              <p className="text-md-right text-sm-left">{company.companyName}</p>
              <p className="text-md-right text-sm-left">
                <Moment format="Do MMM YYYY">
                  {date}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobItem;