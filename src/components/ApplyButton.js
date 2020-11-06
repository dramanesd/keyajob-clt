import React from 'react';
import {Link} from 'react-router-dom';

const ApplyButton = props => {
    const { applicationLink } = props;
  return(
    <div className="button-container d-flex justify-content-center">
      <button className="button"><Link to={applicationLink}><span>Apply</span></Link></button>
    </div>
  )
}

export default ApplyButton;