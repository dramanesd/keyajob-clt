import React from 'react';
import MultiStep from './Multistep';
import {steps} from './GroupSteps';

const JobPostForm = props => {
  return (
    <MultiStep steps={steps} />
  )
}

export default JobPostForm;