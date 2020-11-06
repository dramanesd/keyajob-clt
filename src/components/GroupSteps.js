import React from 'react';
import CompagnyForm from '../containers/CompagnyForm';
import JobForm from '../containers/JobForm';
import ConfirmJobPost from './ConfirmJobPost';

const steps = [
  {name: 'Compagny', component: <CompagnyForm />},
  {name: 'Job Details', component: <JobForm />},
  {name: 'Getting Started', component: <ConfirmJobPost />}
]

export {steps}